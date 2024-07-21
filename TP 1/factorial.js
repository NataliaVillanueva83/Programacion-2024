/*4. Crea un programa que calcule el factorial de un número ingresado por el usuario utilizando
un bucle.*/
const prompt = require('prompt-sync')();

function factorial(num) {
    
    let result = 1;
    if (num === 0 || num === 1) {
        return 1;
    }

 
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
    
    return result;
}

let numUser = Number(prompt("Ingrese un número --> "));

console.log(`El factorial de ${numUser} es: ${factorial(numUser)}`);

