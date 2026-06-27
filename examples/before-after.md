# Before / After Code Examples

Before/After code comparison demonstrating structural and visual enhancements.

---

## 1. Clean Coding: Early Return Refactor

### Before
```javascript
function processPayment(user, amount) {
    if (user !== null) {
        if (user.isActive) {
            if (amount > 0) {
                return executeTransaction(user, amount);
            } else {
                throw new Error("Invalid amount");
            }
        } else {
            throw new Error("User inactive");
        }
    } else {
        throw new Error("User missing");
    }
}
```

### After
```javascript
function processPayment(user, amount) {
    if (!user) throw new Error("User missing");
    if (!user.isActive) throw new Error("User inactive");
    if (amount <= 0) throw new Error("Invalid amount");

    return executeTransaction(user, amount);
}
```
