// 1. Creación de un objeto con propiedades
let myCar = new Object(); //Se crea un nuevo objeto
myCar.make = 'Ford'; //Se guardan diferentes valores dentro del objeto
myCar.model = 'Mustang'; 
myCar.year = 1969;

console.log(myCar); // Se imprime el objeto con todo su contenido

//2. Declaración de un objeto con variables locales y públicas

const myModule = (() => {
    // Variables de contexto local 
    const privateFoo = 'Soy un valor privado, sólo puedo ser usado dentro de éste objeto';
    const privateBar = [1,2,3,4];
    const baz = 'Soy un valor que será expuesto/mostrado';

    // Variable para guardar las variables locales
    const exported = {
        publicFoo: 'Valor público, puede ser visualizado donde sea llamado',
        publicBar: 'Otro valor público',
        publicBaz: baz
    }

    // Exposición de variables locales
    return exported;
})(); 
//Si no se agregan los parentesis finales '();', el elemento creado es reconocido como una función y no como un objeto

console.log(myModule);