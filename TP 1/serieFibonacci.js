/*5. Escribe un programa que genere la serie de Fibonacci hasta el término n ingresado por el
usuario.*/

function serieFibonacci  (num){
    let fibonacciArray = [0, 1];
    if (num <= 0) {
        return [];
    }
  while (fibonacciArray[fibonacciArray.length - 1] <= num) {
        fibonacciArray.push(fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]);
    }
    return fibonacciArray;
  


}
let numUser= 100;
console.log(serieFibonacci(numUser));
