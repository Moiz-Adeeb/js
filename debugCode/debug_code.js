function performOperation() {
    //get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    //check if inputs are valid numbers

    if (!isNaN(num1) && !isNaN(num2)) {
        //perform operation
        let result = multiply(num1, num2);

        //display result
        displayResult(result);
    } else {
        displayResult("Please enter a valid number");
    }

    function multiply(a, b) {
        //introduce debugger statement to pasuse execution
        debugger;

        //multiply numbers
        return a * b;
    }

    function displayResult(result) {
        //display result in the paragraph element
        const resultElement = document.getElementById('result');
        resultElement.textContent = `The result is ${result}`;
    }
}