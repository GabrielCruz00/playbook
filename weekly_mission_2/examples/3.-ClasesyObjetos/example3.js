console.log('Ejemplo 3: Instanciar un objeto con atributos');

class student {
    // el constructor permite instancias un objeto y asignarle atributos
    constructor(name, age, subjects){
        this.name = name;
        this.age = age;
        this.subjects = subjects;
    }
}

// Ahora creamos un objeto de la clase student (instanciar)
const gabrielStudent = new student('Gabriel', 12, ['javaScript', 'HTML']);
console.log(gabrielStudent);