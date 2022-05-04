console.log('Ejemplo 16: Ordenando una lista de objetos');
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 }
];

users.sort((a,b) => { //compareFunction 
    if (a.age < b.age) return -1; // -1 situa A un indice menor que B
    if (a.age > b.age) return 1; // 1 situa A un indice mayor que B
    return 0;   // si son iguales, los deja como están
});

console.log(users);