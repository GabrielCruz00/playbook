console.log('Ejemplo 4: Uso de map para recorrer los elementos de una lista');
const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map(function(num){
    return num * num;
});
console.log('');

console.log('const numbersSquare = numbers.map(function(num){return num * num;});')
console.log(numbersSquare);
console.log('');

console.log('const numbersSquare2 = numbers.map((num) => {return num * num});')
const numbersSquare2 = numbers.map((num) => {return num * num});
console.log(numbersSquare2);