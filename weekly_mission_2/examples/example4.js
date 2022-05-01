console.log('Ejemplo 4: Objeto con métodos');
console.log('');

const pet = {
    name: 'Dante',
    // Funcion que se guarda como una propiedad
    sayHello: function(){
        //this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda!`);
    }
}

console.log('');
console.log(`"pet.sayHello();"`);
pet.sayHello();