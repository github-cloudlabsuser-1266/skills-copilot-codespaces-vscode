def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    try:
        return x / y
    except ZeroDivisionError:
        return None

def percentage(x, y):
    try:
        return (x / y) * 100
    except ZeroDivisionError:
        return None

def calculator():
    """
    A simple calculator function that allows the user to perform basic arithmetic operations.

    The user can choose from the following operations:
    1. Add
    2. Subtract
    3. Multiply
    4. Divide
    5. Percentage

    The function prompts the user to enter their choice of operation and two numeric values.
    It then performs the selected operation and prints the result.

    If the user enters an invalid choice or non-numeric values, appropriate error messages are displayed.

    Returns:
        None
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    choice = input("Enter choice (1/2/3/4/5): ").strip()

    if choice in ['1', '2', '3', '4', '5']:
        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
        except ValueError:
            print("Invalid input! Please enter numeric values.")
            return

        if choice == '1':
            print(f"{num1} + {num2} = {add(num1, num2)}")
        elif choice == '2':
            print(f"{num1} - {num2} = {subtract(num1, num2)}")
        elif choice == '3':
            print(f"{num1} * {num2} = {multiply(num1, num2)}")
        elif choice == '4':
            result = divide(num1, num2)
            if result is None:
                print("Error! Division by zero.")
            else:
                print(f"{num1} / {num2} = {result}")
        elif choice == '5':
            result = percentage(num1, num2)
            if result is None:
                print("Error! Division by zero.")
            else:
                print(f"{num1} is {result}% of {num2}")
    else:
        print("Invalid choice! Please select a valid operation.")

if __name__ == "__main__":
    calculator()