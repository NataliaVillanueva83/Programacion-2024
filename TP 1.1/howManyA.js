/*3. Escribe un programa que cuente cuántas veces aparece la letra "a" en una cadena de texto
ingresada por el usuario.*/
const prompt = require('prompt-sync')();

function countLetter(text, letter) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function countLetterA(texto) {
    let count = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}
//cuando llamamos a la función countLetter
let textUser = prompt("Ingrese una cadena de texto --> ");
let letterUser = prompt("Ingrese una letra --> ");
let countLett= countLetter(textUser,letterUser);
console.log (`La cantidad de veces que aparece la letra ${letterUser} en la palabra ${textUser} es  ${countLett}.`);


//cuando llamamos a la función countLetterA

let countLettA = countLetterA(textUser);
console.log (`La cantidad de veces que aparece la letra 'a' en la palabra ${textUser} es  ${countLettA}.`);