class logger {
    constructor(name){
        // al crear un bojeto, se guardarán estos valores 
        this.count = 0;
        this.name = name;
    }

    log(message) {
        this.count++ //Se aumenta el contador interno al llamar este método
        console.log(`[${this.name}] ${message}`);
    }
}

module.exports = new logger('DEFAULT') //Instanciación del objeto y se exporta
