let displayBox = document.querySelector(".result-field"); 
let operators = ["+", "-", "*", "%", "/", "."];

function addDisplay(x) {
let current = displayBox.innerHTML;
let lastIndex = current[current.length-1];

    if (current == 0) {
        return displayBox.innerHTML = x;
    }else if(operators.includes(x) && operators.includes(lastIndex)){
        return displayBox.innerHTML = current.substr(0, current.length-1)+x;
    }
    return displayBox.innerHTML += x; 
}


function calculateAll() {
    displayBox.innerHTML = eval(displayBox.innerHTML); } 

function clearAll() {
    displayBox.innerHTML = 0;
}

function clearLast() {
    let current = displayBox.innerHTML;
    if (current.length == 1) {
        displayBox.innerHTML = 0;
    }else{
    displayBox.innerHTML = current.substr(0, current.length-1);
    }
}