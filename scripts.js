document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("screen");
    let currentInput = "";
    let operator = "";
    let firstOperand = null;

    document.querySelectorAll(".calc-button").forEach(button => {
        button.addEventListener("click", function () {
            const value = this.getAttribute("data-value");

            console.log("Button Clicked", value);

            if (!isNaN(value) || value === ".") {
                currentInput += value;
                display.value = currentInput;
            } else if (value === "C") {
                currentInput = "";
                firstOperand = null;
                operator = "";
                display.value = "0";
            } else if (value === "=") {
                if (firstOperand !== null && operator) {
                    currentInput = calculate(firstOperand, operator, parseFloat(currentInput)).toString();
                    display.value = currentInput;
                    firstOperand = null;
                    operator = "";
                }
            } else {
                if (currentInput !== "") {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = "";
                }
            }
        });
    });

    function calculate(a, op, b) {
        switch (op) {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return a / b;
            default: return b;
        }
    }
});