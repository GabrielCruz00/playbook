console.log('Ejemplo 3: Objeto con diferentes propiedades');
console.log('');

const myObject = {
    name: 'Dante',
    age: 6,
    nicknames: [
        'Dateruska',
        'Tukis'
    ],
    adress: {
        zip_code: '03020',
        street: 'Cuauhtemox',
        city: 'CDMX'
    }
}

console.log(myObject);
console.log('');

console.log(`"console.log(myObject.name);"`)
console.log(myObject.name);
console.log('');

console.log(`"console.log(myObject['adress']);"`)
console.log(myObject['adress']);