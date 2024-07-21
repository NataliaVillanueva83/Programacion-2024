/*3. Realiza una aplicación que dados dos valores colocados en variables realice la suma de los
mismos y los muestre por pantalla.*/
const prompt = require('prompt-sync')();

function sumaNum (n1,n2){

    let suma = n1 + n2;
    console.log(` ${n1} + ${n2} = ${suma}` );
}

let num1= Number(prompt("Ingrese el primer numero -->"));
let num2= Number(prompt("Ingrese el segundo numero -->"))
sumaNum(num1,num2);