class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage:
const calc = new Calculator();
console.log("Add: " + calc.add(10, 5));         // Output: 15
console.log("Subtract: " + calc.subtract(10, 5)); // Output: 5
console.log("Multiply: " + calc.multiply(10, 5)); // Output: 50
console.log("Divide: " + calc.divide(10, 5));     // Output: 2