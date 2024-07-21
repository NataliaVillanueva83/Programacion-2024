/*5. Escribe un programa que genere la serie de Fibonacci hasta el término n ingresado por el
usuario.*/

const prompt = require('prompt-sync')();

function serieFibonacci(num){
    let secFibonacci;
    if (num === 0 ){
         
       secFibonacci = 0;
    }else  if  (num === 1 || num=== 2){
     
        secFibonacci = 1;
     }
    
     let aux1= 1;
     let aux2;
 
for (i=3; i <=numUser; i++){
    
    aux2= i-2;
    secFibonacci= aux1 + aux2;
    aux1= aux2;
    console.log(secFibonacci);  // imprime los valores de la serie de fibonacci.
 
}
 
}
let numUser = Number(prompt("Ingrese un numero -->"))
serieFibonacci(numUser); 


