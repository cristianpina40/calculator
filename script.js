let zero = document.querySelector('#zero')
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');

let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let dot = document.querySelector('#dot');

let clear = document.querySelector('#delete');
let AC = document.querySelector("#AC");
let equals = document.querySelector('#equal');

let textTop = document.querySelector('#screenTextTop');
let textBottom = document.querySelector('#screenTextBottom');



//Global Parameters
let x = 0;
let y = 0;
let operation = 0;




//Functions add subtract, multiply, divide

function sum(x,y) {
    let z = x + y;
    return z;
};
  
function subtractDo(x,y) { 
    let z = x - y;
    return z;   
};

function multiplyDo(x,y) {
    let z = x*y;
    return z;
};  
function divideDo(x,y){
    let z = x/y;
    return z;
}


function operate(operation, x, y){

    if(operation == 1){
        
        let answer = sum(x,y);
        textTop.innerHTML = answer;
        clearBottom();
    }
    else if(operation == 4){

        let answer = subtractDo(x,y);
        textTop.innerHTML = answer;
        clearBottom();
    }
    else if(operation == 2){
       
        let answer = multiplyDo(x,y);
        textTop.innerHTML = answer;
        clearBottom();
    }
    else if(operation == 3){
        
        if(y === 0){
            textTop.innerHTML = 'Go ask Isaac Newton';
            textBottom.innerHTML = 'Go proof this yourself';
        }
        let answer = divideDo(x,y);
        textTop.innerHTML = answer;
        clearBottom();
    }

    else{

        textBottom.innerHTML = textBottom.innerHTML;
        textTop.innerHTML = textTop.innerHTML;
    }

    operation = 0;
    y = 0;
    x = 0;
}

function bottomDisplay(x){
    if(textBottom.innerHTML === '0')
    {
    textBottom.innerHTML =  x.toString();  
    }
    else{ 
        textBottom.innerHTML = textBottom.innerHTML + x.toString();
    }
}

function topDisplay(x){
    
    textTop.innerHTML = x;
}

function clearDo(){

    textBottom.innerHTML = textBottom.innerHTML.slice(0, -1);
}

function allClear(){

    textBottom.innerHTML = '0';
    textTop.innerHTML = '0';
    operation = 0;
    x = 0;

}

function storeX(x){

    return parseFloat(x);

}

function clearBottom(){

    textBottom.innerHTML = '0';
}


//0 - 9 and dot

one.addEventListener('click', () =>{
    
    bottomDisplay(1);

});

two.addEventListener('click', () =>{
    
    bottomDisplay(2);

});

three.addEventListener('click', () =>{
    
    bottomDisplay(3);

});

four.addEventListener('click', () =>{
    
    bottomDisplay(4);

});

five.addEventListener('click', () =>{
    
    bottomDisplay(5);

});

six.addEventListener('click', () =>{
    
    bottomDisplay(6);

});

seven.addEventListener('click', () =>{
    
    bottomDisplay(7);

});

eight.addEventListener('click', () =>{
    
    bottomDisplay(8);

});

nine.addEventListener('click', () =>{
    
    bottomDisplay(9);

});

zero.addEventListener('click', () =>{
    
    bottomDisplay(0);

});


dot.addEventListener('click', () =>{
    
    bottomDisplay('.');

});



//AC and delete/clear

AC.addEventListener('click', () =>{
    
    allClear();

});

clear.addEventListener('click', () =>{
    
    clearDo();

});


// operations

add.addEventListener('click', () =>{
    if(parseFloat(textTop.innerHTML) > 0){
        operation = 1;
        x = storeX(textTop.innerHTML);
        topDisplay(textTop.innerHTML.toString() + '+');
        clearBottom();
    }
    else{
    operation = 1;
    x = storeX(textBottom.innerHTML);
    bottomDisplay('+');
    topDisplay(textBottom.innerHTML);
    clearBottom();
    }
});

multiply.addEventListener('click', () =>{
    if(parseFloat(textTop.innerHTML) > 0){
        operation = 2;
        x = storeX(textTop.innerHTML);
        topDisplay(textTop.innerHTML.toString() + '*');
        clearBottom();
    }
    else{
    operation = 2;
    x = storeX(textBottom.innerHTML);
    bottomDisplay('*');
    topDisplay(textBottom.innerHTML);
    clearBottom();
    }
});

divide.addEventListener('click', () =>{
    if(parseFloat(textTop.innerHTML) > 0){
        operation = 3;
        x = storeX(textTop.innerHTML);
        topDisplay(textTop.innerHTML.toString() + '/');
        clearBottom();
    }
    else{
    operation = 3;
    x = storeX(textBottom.innerHTML);
    bottomDisplay('/');
    topDisplay(textBottom.innerHTML);
    clearBottom();
    }
});
subtract.addEventListener('click', () =>{
    
    
    
    
    
    if(parseFloat(textTop.innerHTML) > 0){
        operation = 4;
        x = storeX(textTop.innerHTML);
        topDisplay(textTop.innerHTML.toString() + '-');
        clearBottom();
    }
    else{
    operation = 4;
    x = storeX(textBottom.innerHTML);
    bottomDisplay('-');
    topDisplay(textBottom.innerHTML);
    clearBottom();
    }
});

equals.addEventListener('click', () =>{
    
    if(operation == 0){
        textBottom.innerHTML = '0';
        textTop.innerHTML = '0';
    }
    else{
    y = parseFloat(textBottom.innerHTML);
    operate(operation, x, y);
    }
});


