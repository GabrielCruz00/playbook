console.log('Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista');

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num);
console.log(sum);