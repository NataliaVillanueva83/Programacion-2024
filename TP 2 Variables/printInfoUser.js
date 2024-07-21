/*2. Realiza una aplicación que le solicite al usuario su nombre y su edad y le muestre por
pantalla el mensaje “Hola XX tu edad es XX” donde XX son los datos del usuario.*/

const prompt = require('prompt-sync')();
function printUserInfo (){

  let name = prompt("Por favor, ingrese su nombre:");
  let age = prompt("Por favor, ingrese su edad:");
  console.log(`Hola  ${name}  tu edad es ${age}`);
}   

printUserInfo();
