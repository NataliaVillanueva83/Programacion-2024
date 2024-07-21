/*1. Realiza una aplicación que solicite al usuario su nombre y apellido y lo muestre en pantalla.*/
const prompt = require('prompt-sync')();

function printNumSurname (){

let name= prompt ("Por favor ingrese su nombre-->");
let surname= prompt("Por favor ingrese su apellido -->")
console.log (name, surname);

}

printNumSurname();
