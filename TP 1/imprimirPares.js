/*1. Diseña un programa que solicite al usuario ingresar un número y luego imprima todos los
números pares desde 0 hasta ese número.*/
const prompt = require('prompt-sync')();

function printEvenNUmbers(number){

     if (number >= 0){
    let evenNum= 0
     while (evenNum <= number){
         console.log(evenNum);
         evenNum += 2;
     }
 } else{
    console.log("Error: Ha ingresado un numero menor que 0")
 }
}

 let numUser= Number(prompt("Ingrese un número entero positivo -->"));
 printEvenNUmbers(numUser);