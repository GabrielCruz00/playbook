console.log('Ejemplo 6: Getters para acceder a los atributos del objeto');

class ajolonauta {
    constructor(name, age, stack) {
        this.name = name;
        this.age = age;
        this.stack = stack;
        this.exercisesCompleted = 0;
        this.exercisesTodo = 99;
    }
    //Se puede acceder a los atributos de esta clase
    get getExercisesCompleted() {
        return this.exercisesCompleted;
    }
    get getName() {
        return this.name;
    }
}

const woopa = new ajolonauta('Woopa', 1, []);
console.log(woopa.getName);
console.log(woopa.getExercisesCompleted);
