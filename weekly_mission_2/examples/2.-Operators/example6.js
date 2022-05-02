console.log(`Ejemplo 6: Uso de Map para convertir los nombres de una lista a mayúsculas
Además, secciona cada elemento de tal manera que solo obtiene las primeras 3 letras de cada elemento`);

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const countriesFirstThreeLetters = countries.map(item => item.toUpperCase().slice(0,3));

console.log(countriesFirstThreeLetters);