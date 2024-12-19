// Function to add a value to the display
function addToDisplay(value) {
    document.calculator.display.value += value;
}

// Function to clear the display when 'Clear' button is pressed
function clearDisplay() {
    document.calculator.display.value = '';
}

// Function to evaluate the expression in the display when '=' button is pressed
function calculate() {
    try {
        // Using 'eval' to evaluate the expression entered in the display field
        document.calculator.display.value = eval(document.calculator.display.value);
    } catch (e) {
        // In case of an error (invalid expression), display 'Error' on the screen
        document.calculator.display.value = 'Error';
    }
}
