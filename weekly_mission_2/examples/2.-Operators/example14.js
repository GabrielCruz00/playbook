console.log('Ejemplo 14: uso de some');
console.log('Valida los elementos de una lista y si uno cumple, regresa un true');

const bools = [true, true, false, true];
const areSomeFalse = bools.some( item => item === false);

console.log('Alguno de los elementos es false: ' + areSomeFalse);