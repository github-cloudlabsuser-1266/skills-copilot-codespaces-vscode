// Calculator class to handle operations
class Calculator {
    // Method to add two numbers
    add(a, b) {
        return a + b;
    }

    // Method to subtract two numbers
    subtract(a, b) {
        return a - b;
    }

    // Method to multiply two numbers
    multiply(a, b) {
        return a * b;
    }

    // Method to divide two numbers
    divide(a, b) {
        if (b === 0) {
            return "Error! Division by zero.";
        }
        return a / b;
    }
}

// Main function to interact with the calculator
function main() {
    const calculator = new Calculator();
    console.log("Welcome to the Calculator!");

    const prompt = require("prompt-sync")(); // Use prompt-sync for user input

    while (true) {
        console.log("\nOptions:");
        console.log("1. Add");
        console.log("2. Subtract");
        console.log("3. Multiply");
        console.log("4. Divide");
        console.log("5. Quit");

        const choice = prompt("Enter your choice (1/2/3/4/5): ");

        if (choice === "5") {
            console.log("Thanks for using the calculator. Goodbye!");
            break;
        }

        const num1 = parseFloat(prompt("Enter the first number: "));
        const num2 = parseFloat(prompt("Enter the second number: "));

        let result;
        switch (choice) {
            case "1":
                result = calculator.add(num1, num2);
                console.log(`The result is: ${result}`);
                break;
            case "2":
                result = calculator.subtract(num1, num2);
                console.log(`The result is: ${result}`);
                break;
            case "3":
                result = calculator.multiply(num1, num2);
                console.log(`The result is: ${result}`);
                break;
            case "4":
                result = calculator.divide(num1, num2);
                console.log(`The result is: ${result}`);
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

// Run the main function
main();