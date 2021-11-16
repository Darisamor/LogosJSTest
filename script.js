function plus() {
    let num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    let num2 = document.getElementById('num2').value;
    num2 = parseFloat(num2);
    document.getElementById('res').innerHTML = num1 + num2;
}

function minus() {
    let num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    let num2 = document.getElementById('num2').value;
    num2 = parseFloat(num2);
    document.getElementById('res').innerHTML = num1 - num2;
}

function multiply() {
    let num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    let num2 = document.getElementById('num2').value;
    num2 = parseFloat(num2);
    document.getElementById('res').innerHTML = num1 * num2;
}

function divide() {
    let num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    let num2 = document.getElementById('num2').value;
    num2 = parseFloat(num2);
    document.getElementById('res').innerHTML = num1 / num2;
}