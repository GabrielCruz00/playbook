console.log('Ejemplo 5: Objeto con método que recibe parámetros');

const myPet = {
    name: 'Woopa',
    sayHelloToMyPet: function(yourPet){
        console.log(`${this.name} say's hello to ${yourPet}`);
    }
}

console.log('')
console.log(`"myPet.sayHelloToMyPet('Dante');"`);
myPet.sayHelloToMyPet('Dante');