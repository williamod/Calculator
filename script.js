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

//buttons

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
  });
});


//elements

    //first num
    
    //operator
    //second num
    //evaluate 
