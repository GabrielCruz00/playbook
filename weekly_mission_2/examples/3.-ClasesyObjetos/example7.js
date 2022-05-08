console.log('Ejemplo 7: Set para modificar los atributos del objeto');

class missionCommander {
    constructor(name, mission) {
        this.name = name;
        this.mission = mission;
        this.students = 0;
        this.lives = 0;
    }

    get getStudents() {
        return this.students;
    }

    get getLives() {
        return this.lives;
    }

    set setStudents(students) {
        this.students = students;
    }

    set setLives(lives) {
        this.lives = lives;
    }
}

const mcNode = new missionCommander('Carlo', 'NodeJS');

console.log(mcNode.getStudents);
console.log(mcNode.getLives);

//Actualizamos los atributos por medio de los setters
mcNode.setStudents = 100;
mcNode.setLives = 14;

console.log(mcNode.getStudents);
console.log(mcNode.getLives);
