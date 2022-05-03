console.log('Ejemplo 9: Uso de reduce para calcular la suma de elementos de una lista');

const numbers = [1, 2, 3, 4, 5];
const result1 = numbers.reduce((acc, item) => acc + item, 0);
const result2 = numbers.reduce((acc, item) => acc - item, 0);
const result3 = numbers.reduce((acc, item) => acc + item, 15);

console.log(result1);
console.log(result2);
console.log(result3);