console.log('Ejemplo 4: Metodos en los objetos');

class repository {
    constructor(name, author, language, stars){
        this.name = name;
        this. author = author;
        this.language = language;
        this.stars = stars;
    }

    getInfo(){ //Es una función que ejecutará cualquier objeto instanciado de la clase repository
        return `Repository ${this.name} has ${this.stars} stars`;
    }
}

const myRepo = new repository('Launchx', 'GabrielCruz00', 'js', 0);
console.log(myRepo.getInfo());