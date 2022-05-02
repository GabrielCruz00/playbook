console.log('Ejemplo 5: uso de map para convertir elementos de una lista a minúsculas');

const names =  ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const namesToLowerCase = names.map(name => name.toLocaleLowerCase());

console.log(namesToLowerCase);