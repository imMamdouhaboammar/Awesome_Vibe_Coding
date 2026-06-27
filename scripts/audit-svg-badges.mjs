import fs from 'fs';
import path from 'path';

const BADGES_DIR = 'assets/badges';

const charWidths = {
  'A': 8.7, 'B': 8.7, 'C': 9.4, 'D': 9.4, 'E': 8.7, 'F': 8.0, 'G': 9.4, 'H': 9.4,
  'I': 3.6, 'J': 6.5, 'K': 8.7, 'L': 8.0, 'M': 10.8, 'N': 9.4, 'O': 9.4, 'P': 8.7,
  'Q': 9.4, 'R': 9.4, 'S': 8.7, 'T': 8.0, 'U': 9.4, 'V': 8.7, 'W': 12.3, 'X': 8.7,
  'Y': 8.7, 'Z': 8.0, ' ': 3.6
};

function estimateTextWidth(text, letterSpacing) {
  let width = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    width += charWidths[char] || 8.5;
    if (i < text.length - 1) {
      width += letterSpacing;
    }
  }
  return width;
}

async function auditBadges() {
  if (!fs.existsSync(BADGES_DIR)) {
    console.error(`Error: Directory ${BADGES_DIR} not found.`);
    process.exit(1);
  }

  const files = fs.readdirSync(BADGES_DIR).filter(file => file.endsWith('.svg'));
  let hasErrors = false;

  console.log(`Auditing ${files.length} badge SVG files...\n`);

  for (const file of files) {
    const filePath = path.join(BADGES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const errors = [];

    // Check basic XML security rules
    if (content.includes('<script')) {
      errors.push("Contains <script> tags.");
    }
    if (content.includes('foreignObject')) {
      errors.push("Contains <foreignObject> tags.");
    }
    if (/href\s*=\s*["']http/.test(content)) {
      errors.push("Contains external href link.");
    }
    if (content.includes('@import') || content.includes('<style')) {
      // Check if it's importing external fonts/CSS
      if (content.includes('url(') && !content.includes('data:image/svg+xml')) {
        errors.push("Contains potentially external resource url().");
      }
    }

    // Parse root SVG properties
    const svgMatch = content.match(/<svg([^>]+)>/);
    if (!svgMatch) {
      errors.push("Could not find <svg> root element.");
      console.log(`[FAIL] ${file}:\n  - ` + errors.join('\n  - '));
      hasErrors = true;
      continue;
    }

    const svgAttrs = svgMatch[1];
    
    // Width
    const widthMatch = svgAttrs.match(/width="([^"]+)"/);
    if (!widthMatch) {
      errors.push("Missing 'width' attribute on svg.");
    }
    const width = widthMatch ? parseInt(widthMatch[1], 10) : 0;

    // Height
    const heightMatch = svgAttrs.match(/height="([^"]+)"/);
    if (!heightMatch || heightMatch[1] !== '32') {
      errors.push(`Height must be exactly "32" (found: ${heightMatch ? heightMatch[1] : 'missing'}).`);
    }

    // viewBox
    const viewBoxMatch = svgAttrs.match(/viewBox="([^"]+)"/);
    if (!viewBoxMatch) {
      errors.push("Missing 'viewBox' attribute.");
    } else {
      const expectedViewBox = `0 0 ${width} 32`;
      if (viewBoxMatch[1] !== expectedViewBox) {
        errors.push(`viewBox mismatch: expected "${expectedViewBox}", found "${viewBoxMatch[1]}".`);
      }
    }

    // ARIA role and label
    const roleMatch = svgAttrs.match(/role="([^"]+)"/);
    if (!roleMatch || roleMatch[1] !== 'img') {
      errors.push(`Role must be "img" (found: ${roleMatch ? roleMatch[1] : 'missing'}).`);
    }

    const ariaLabelMatch = svgAttrs.match(/aria-label="([^"]+)"/);
    if (!ariaLabelMatch) {
      errors.push("Missing 'aria-label' attribute.");
    }

    // Check Background Rect
    const bgRectMatch = content.match(/<rect\s+[^>]*width="([^"]+)"\s+[^>]*height="32"\s+[^>]*rx="16"\s+[^>]*fill="([^"]+)"/);
    if (!bgRectMatch) {
      // Check alternate order
      const bgRectAlt = content.match(/<rect\s+[^>]*fill="([^"]+)"[^>]*width="([^"]+)"/);
      if (!bgRectAlt && !content.includes('fill="#0B1120"') && !content.includes('fill="#111827"')) {
        errors.push("Could not find standard dark background rect.");
      }
    } else {
      const bgWidth = parseInt(bgRectMatch[1], 10);
      if (bgWidth !== width) {
        errors.push(`Background rect width (${bgWidth}) does not match SVG width (${width}).`);
      }
      const fill = bgRectMatch[2];
      if (fill !== '#0B1120' && fill !== '#111827') {
        errors.push(`Background fill must be #0B1120 or #111827 (found: ${fill}).`);
      }
    }

    // Check Border Rect
    const borderRectMatch = content.match(/<rect\s+[^>]*x="1"\s+[^>]*y="1"\s+[^>]*width="([^"]+)"\s+[^>]*height="30"\s+[^>]*rx="15"\s+[^>]*stroke="([^"]+)"\s+[^>]*stroke-width="2"/);
    if (!borderRectMatch) {
      errors.push("Missing or non-standard border rect (must be inset by 1px: x=\"1\" y=\"1\" width=\"{width - 2}\" height=\"30\" rx=\"15\" stroke-width=\"2\").");
    } else {
      const borderWidth = parseInt(borderRectMatch[1], 10);
      if (borderWidth !== width - 2) {
        errors.push(`Border rect width (${borderWidth}) must be width - 2 (${width - 2}).`);
      }
    }

    // Check Text spacing and clipping
    const textMatch = content.match(/<text\s+([^>]+)>([\s\S]*?)<\/text>/);
    if (!textMatch) {
      errors.push("Missing <text> element.");
    } else {
      const textAttrs = textMatch[1];
      const textVal = textMatch[2].trim();

      const xMatch = textAttrs.match(/x="([^"]+)"/);
      if (!xMatch) {
        errors.push("Text element is missing 'x' attribute.");
      }
      const textX = xMatch ? parseInt(xMatch[1], 10) : 0;

      const yMatch = textAttrs.match(/y="([^"]+)"/);
      if (!yMatch || yMatch[1] !== '21') {
        errors.push(`Text baseline y must be "21" (found: ${yMatch ? yMatch[1] : 'missing'}).`);
      }

      const letterSpacingMatch = textAttrs.match(/letter-spacing="([^"]+)"/);
      const letterSpacing = letterSpacingMatch ? parseFloat(letterSpacingMatch[1]) : 0.4;

      const estimatedW = estimateTextWidth(textVal, letterSpacing);
      const textEnd = textX + estimatedW;
      const rightPadding = width - textEnd;

      if (rightPadding < 16) {
        errors.push(`Right padding too small: estimated text width is ${estimatedW.toFixed(1)}px, text ends at x=${textEnd.toFixed(1)}px. Right padding is ${rightPadding.toFixed(1)}px (minimum is 16px).`);
      }
    }

    if (errors.length > 0) {
      console.log(`[FAIL] ${file}:`);
      console.log(`  - ` + errors.join('\n  - '));
      hasErrors = true;
    } else {
      console.log(`[PASS] ${file} (width: ${width}px)`);
    }
  }

  console.log('\n--- Audit Summary ---');
  if (hasErrors) {
    console.log('Audit failed. Some badges need correction.');
    process.exit(1);
  } else {
    console.log('All badges are valid and compliant!');
  }
}

auditBadges();
