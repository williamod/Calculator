//buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttonPress(button.id, button.classList);
    console.log(`current:${currentNumBox.innerText}`);
    console.log(`mem:${memNumBox.innerText}`);
    console.log(`oper:${operatorBox.innerText}`);
    
  });
});

//elements
const currentNumBox = document.createElement('div') 
const memNumBox = document.createElement('div')
const operatorBox = document.createElement('div')

//display
const displayBox = document.querySelector('#display')
displayBox.appendChild(memNumBox)
displayBox.appendChild(currentNumBox)

//functions
function add (a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a/b
}

function negative (a) {
    return a * -1
}

function doMath(first,second,operator) {
    a = parseFloat(first)
    b = parseFloat(second)
    if (operator == 'add') {return add(a,b)}
    if (operator == 'subtract') {return subtract(a,b)}
    if (operator == 'multiply') {return multiply(a,b)}
    if (operator == 'divide') {return divide(a,b)}
}





function buttonPress(id, classList) {
    //num
    if (classList[1] == 'num') {
        if (memNumBox.innerText == 'Error') {
            memNumBox.innerText = ''
        }
        currentNumBox.innerText += id;
        memNumBox.style.display = 'none';
        currentNumBox.style.display = 'block';
    }

    //operator
    if (classList[1] == 'operator') {
        //evaluate and add operator to next
        if (operatorBox.innerText == '' && memNumBox.innerText == '') {
            operatorBox.innerText = id
            memNumBox.innerText = currentNumBox.innerText
            currentNumBox.innerText = ''
        }
        else if (operatorBox.innerText == '' && memNumBox.innerText != '') {
            operatorBox.innerText = id
        }

        else{
            memNumBox.innerText = (doMath(memNumBox.innerText, currentNumBox.innerText, operatorBox.innerText));
            operatorBox.innerText = id;
        }
        
        

        currentNumBox.style.display = 'none';
        memNumBox.style.display = 'block';
        currentNumBox.innerText = '';

        if (memNumBox.innerText == 'Infinity' || memNumBox.innerText == 'NaN') {
            memNumBox.innerText = 'Error'
        }
        
    }

    if (id == 'evaluate') {
        if (operatorBox.innerText == '') {}
        else {
            memNumBox.innerText = (doMath(memNumBox.innerText, currentNumBox.innerText, operatorBox.innerText))
            currentNumBox.style.display = 'none';
            memNumBox.style.display = 'block';
            currentNumBox.innerText = '';
            operatorBox.innerText = '';

            if (memNumBox.innerText == 'Infinity' || memNumBox.innerText == 'NaN') {
                memNumBox.innerText = 'Error'
            }
        }
    }

    //edit
    if (id == 'clear') {
        currentNumBox.innerText = '';
        memNumBox.innerText = '';
        operatorBox.innerText = '';
    }
    //backspace
    if (id == 'backspace'){
        currentNumBox.innerText = currentNumBox.innerText.slice(0,-1)
    }
   
    //decimal
    if (id == '.') {
        if (!currentNumBox.innerText.includes('.')) {
            currentNumBox.innerText += '.'
        }
    }
    //negative
    if (id == 'negative' && currentNumBox.innerText != '' && currentNumBox.innerText != '0') {
        currentNumBox.innerText *= -1
        currentNumBox.innerText.toString() 
    }



    
}



