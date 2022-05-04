console.log('Ejemplo 10: Uso de every para validar los elementos de una lista');
console.log('Si todos cumplen con la validación, se regresa un true, de lo contrario se regresa false');

const names = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4'];
const areAllStr = names.every( name => typeof name === 'string' )
console.log('Todos los nombres son string: ' + areAllStr);