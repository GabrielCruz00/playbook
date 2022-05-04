console.log('Ejemplo 13: Uso de findIndex, regresa la posición del primer elemento que cumpla con la condición');

const names = ['Explorer 1', 'Explorer 2', 'Explorer 3'];
const result = names.findIndex( name => name.length > 7);
const result2 = names.findIndex(name => name == 'Explorer 2');

console.log('Primer elemento cuya palabra sea mayor a 7: ' + result);
console.log('Primer elemento que coincida con "Explorer 2": ' + result2);