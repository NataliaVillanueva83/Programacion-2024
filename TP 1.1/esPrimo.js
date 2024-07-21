/*2. Desarrolla un programa que determine si un número ingresado por el usuario es primo o
no.*/
const prompt = require('prompt-sync')();

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
let numUser= Number(prompt("Ingrese un numero-->"));

if (esPrimo(numUser)) {
    console.log(`${numUser} es un numero primo.`);
} else {
    console.log(`${numUser} no es un numero primo.`);
}