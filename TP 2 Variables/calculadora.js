/*4. Realiza una calculadora con las operaciones básicas (suma, resta multiplicación y división).
Los valores para las operaciones deben estar almacenados en variables previamente.*/

const prompt = require('prompt-sync')();

function calculadora(){
    let num1= Number(prompt("Ingrese el primer numero-->"));
    let num2= Number(prompt("Ingrese el segundo numero-->"));
    let operacion= prompt("Ingrese la operacion (+,-,*,/)-->");

    switch(operacion){
        case '+':
            console.log(num1 + " + " + num2 + " = " + (num1 + num2));
            break;
        case '-':
            console.log(num1 + " - " + num2 + " = " + (num1 - num2));
            break;
        case '*':
            console.log(num1 + " * " + num2 + " = " + (num1 * num2));
            break;
        case '/':
            if (num2!= 0){
                console.log(num1 + " / " + num2 + " = " + (num1 / num2));
            }
}
}
function addition (cantidad){
  
    let suma = 0;
    for(let i=0; i<cantidad; i++){
        num= Number(prompt("Ingrese numero para sumar-->"))
        suma= suma + num;
    }
    return suma;
}

//console.log (addition(10));

function subtraction(cant){
    let resta= Number(prompt("Ingrese numero para restar-->"));
    for (let i=1; i< cant; i++){
       let  num= Number(prompt("Ingrese numero para restar-->"));
            resta-=num;
        }
    
    return resta;
}

//console.log(subtraction(4));

function multiplication(cant){
    let mult= Number(prompt("Ingrese numero para multiplicar-->"));
    for (let i=1; i< cant; i++){
        let num= Number(prompt("Ingrese numero para multiplicar-->"));
        if (num== 0 || mult== 0){
            return 0;
        }
            mult*=num;
        }
    return mult;
}
//console.log(multiplication(4));

function division(cant){
    let div= Number(prompt("Ingrese numero para dividir-->"));
    for (let i=1; i< cant; i++){
        let num= Number(prompt("Ingrese numero para dividir-->"));
        if (num== 0){
            return "Error: No se puede dividir por cero.";
        }
            div/=num;
        }
    return div;
}
//console.log(division(4));

calculadora();