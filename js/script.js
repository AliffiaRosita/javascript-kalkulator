const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number)=>{
    calculatorScreen.value = number;
}

let prevNumber='';
let calculatorOperator = '';
let currentNumber = '0';

const inputNumber = (number)=>{
    if(currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

const inputOperator = (operator)=>{
    if (calculatorOperator ==='') {
        prevNumber = currentNumber;
    }
    calculatorOperator = operator;
    currentNumber = '';
}

const clearAll=()=>{
    prevNumber = '';
    calculatorOperator='';
    currentNumber='0';
}

const calculate = ()=>{
    let result='';
    if (calculatorOperator ==="+"){
        result = parseFloat(prevNumber) + parseFloat(currentNumber);
    }else if(calculatorOperator === "-"){
        result = parseFloat(prevNumber) - parseFloat(currentNumber);
    }else if(calculatorOperator === "*"){
        result = parseFloat(prevNumber) * parseFloat(currentNumber);
    }else{
        result = parseFloat(prevNumber) / parseFloat(currentNumber);
    }
    currentNumber = result;
    calculatorOperator='';
    
}

const history = document.querySelector('.history-screen');
const updateHistory=(operation)=>{
    history.value = operation;
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click',()=>{
    clearAll();
    updateScreen(currentNumber);
    updateHistory("");
});

const inputDecimal=(dot)=>{
    currentNumber +=dot;
}
const percentageCalculate = ()=>{
    let result='';
    result = parseFloat(currentNumber)/100;
    currentNumber = result;
}

// karena semuanya ada class number, pakai selector all
const numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);

        // ambil value buttonnya dan update ke screen
       updateScreen(currentNumber);
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => {
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value);
        updateScreen(event.target.value);

    });
});

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener('click',()=>{
    updateHistory(`${prevNumber} ${calculatorOperator} ${currentNumber}`);
    calculate();
    updateScreen(currentNumber);
    
});

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click',(event)=>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

const percentage = document.querySelector('.percentage');
percentage.addEventListener('click',()=>{
    percentageCalculate();
    updateScreen(currentNumber);
    updateHistory(currentNumber);
});


