

nb1 = input("Enter first number: ")
nb2 = input("Enter second number: ")
operation = input("Enter operation (+, -, *, /): ")


if nb1 != "" and nb2 != "" and operation in ["+", "-", "*", "/"]:
   
    print("Calculating...")
    if operation == "+":
        result = int(nb1) + int(nb2)
        print("Result: ", result)
    elif operation == "-":
        result = int(nb1) - int(nb2)
        print("Result: ", result)
    elif operation == "*":
        result = int(nb1) * int(nb2)
        print("Result: ", result)
    elif operation == "/":
        if int(nb2) != 0:
            result = int(nb1) / int(nb2)
            print("Result: ", result)
        else:
            print("Error: Division by zero is not allowed.")
    else:
        print("Invalid operation. Please enter one of +, -, *, /.")
else:
    print("veuillez saisir les deux nombres et l'opération valide.")
