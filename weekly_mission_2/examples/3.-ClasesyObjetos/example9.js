console.log('Ejemplo 9: Herencia entre dos clases');

class developer {
    constructor(name, mainLang, stack) {
        this.name = name;
        this.mainLang =mainLang;
        this.stack = stack;
    }

    get getName() {
        return this.name;
    }
}

const carloDev = new developer('Carlo', 'js', ['elixir', 'groove', 'lisp']);
console.log(carloDev);

//Extends indica que la nueva clase heredará las propiedades de la clase padre (developer)
// Podemos definir una clase vacia y reusar los componente de la clase padre
//O bient agregar nuevos metodos y componentes independientes o relacionados con la clase padre
class LaunchXStudents extends developer {
    get getStack() {
        return this.stack;
    }
}

const carloLaunchXDev = new LaunchXStudents('Carlo', 'js', ['elixir', 'groove', 'lisp']);
console.log(carloLaunchXDev);
console.log(carloLaunchXDev.getName);
console.log(carloLaunchXDev.getStack);
