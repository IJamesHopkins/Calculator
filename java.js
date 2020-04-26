var numberButtons = document.querySelectorAll('.number');
var operatorButtons = document.querySelectorAll('.operator');
var currentScreen = document.querySelector('.current');
var previousScreen = document.querySelector('.previous');
var clear = document.querySelector('.clear');
var backspace = document.querySelector('.backspace');
var decimal = document.querySelector('.decimal');
var currentNum="";
var previousNum=0;
var currentOperand= null;

clear.addEventListener('click', (e) => {
    clearAll();
});

decimal.addEventListener('click', (e) =>{
    addDecimal();
})

backspace.addEventListener('click', (e) => {
    backspaceFun();
})

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        appendNumber(button.textContent);
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        operatorFunc(button.textContent);
    });
});

function appendNumber (num) {
    currentNum+= num;
    update();
}

function operatorFunc(op) {
    if (currentOperand=='/' && currentNum==0) {
        alert("You cannot divide by 0. Please choose a different number");
        currentNum="";
        return;
    }
    if (currentOperand!=null) {
        evaluate();
    }
    if (op=="=") {
        update();
        currentNum="";
        previousNum=0;
        currentOperand=null;
        return;
    }
    currentOperand = op;
    previousNum=currentNum;
    currentNum="";
    update();
}

function evaluate() {
    if (currentOperand=='X') {
        currentNum= previousNum * currentNum;
    }
    if (currentOperand=='/') {
        currentNum= previousNum / currentNum;
    }
    if (currentOperand=='+') {
        currentNum= parseFloat(previousNum) + parseFloat(currentNum);
    }
    if (currentOperand=='-') {
        currentNum= previousNum - currentNum;
    }
}

function update() {
    currentScreen.textContent = currentNum;
    previousScreen.textContent=previousNum;
}

function clearAll() {
    currentNum="";
    previousNum=0;
    currentOperand= null;
    update();
}

function backspaceFun() {
    currentNum= currentNum.slice(0, -1);
    update();
}

function addDecimal() {
    currentNum+=".";
    update();
}