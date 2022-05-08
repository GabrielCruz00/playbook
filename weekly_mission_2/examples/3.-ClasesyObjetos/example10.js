console.log('Ejemplo 10: Overrinding methods');

class explorer {
    constructor(name, username, mission) {
        this.name = name;
        this.username = username;
        this.mission = mission;
    }

    getNameAndUsername() {
        return `Explorer ${this.name}, username: ${this.username}`;
    }
}

class viajero extends explorer {
    constructor(name, username, mission, cycle) {
    super(name, username, mission); //SUPER llama al constructor de la clase padre
    this.cycle = cycle;
    }

    getGeneralInfo() {
        let nameAndUsername = this.getNameAndUsername(); //llamamos al metodo de la clase padre

        return `${nameAndUsername}, Ciclo ${this.cycle}`;
    }
}

const viajero1 = new viajero('Carlo', 'LaunchX', 'NodeJS', 'Abril 2022');
console.log(viajero1);
console.log(viajero1.getNameAndUsername()); //Metodo de la clase padre
console.log(viajero1.getGeneralInfo()) //Metodo de la clase hija