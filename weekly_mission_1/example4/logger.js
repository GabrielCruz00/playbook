class logger {
    constructor(name) {
        //this es una variable para referenciar el valor del contexto local de esta clase
        this.name = name; // A estas variables se le conocen como atributos 
    }

    // Método 
    // this.name es la variable que se guarda en el contexto local 
    // message es una variable que se le pasa al ejecutar éste método

    info (message){
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`);
    }

    // Otro método
    verbose (message) {
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

// Esta clase se exporta en este módulo
module.exports = logger;