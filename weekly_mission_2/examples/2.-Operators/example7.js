console.log('Ejemplo 7: Uso de filter para filtrar una lista de elementos');

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const countriesContainingLand = countries.filter( country => country.includes('land') );

const countriesEndsByia = countries.filter( country => country.endsWith('ia') );

console.log(countriesContainingLand);
console.log(countriesEndsByia);