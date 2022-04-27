export default class pokemon {
    constructor(name){
        this.name = name;
    }

    sayMessage(message){
        console.log(`Mi pokemon ${this.name} te dice: ${message}`);
    }

    sayHello(){
         console.log(`Mi pokemon ${this.name} te saluda!`);
    }

}