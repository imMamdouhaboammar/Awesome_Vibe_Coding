# Workflow Examples

Trace of active developer workflows being executed.

---

## Example: Executing Debugging Workflow

1. **Step 1: Reproducing the error**
   - Developer logs a database connection error during seed script runs.
   - Run `npm run seed` and capture target error code (`ECONNREFUSED 127.0.0.1:5432`).
2. **Step 2: Feeding trace to AI assistant**
   - Assistant identifies the port configuration was omitted from the local environment file.
3. **Step 3: Verification**
   - Add port to `.env.local`, execute `npm run seed` again. Success.
4. **Step 4: Commit**
   - Add template checks and complete git commit.
