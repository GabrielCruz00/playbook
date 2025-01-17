/*  
    Este modulo se comporta como si fuera un objeto que contiene todo lo definido

    [Module: null prototype] {
        DEFAULT_LEVEL: 'info',
        LEVELS: {error: 0, debug: 1, warn: 2, data: 3, info: 4, verbose: 5},
        logger: [class logger],
        log: [function: log]
    }
*/

// Exports a function
export function log(message){
    console.log(message);
}

// Exports a function
export const DEFAULT_LEVEL = 'info';

// Exports an object
export const LEVELS = {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5
}

// Exports a class
export class logger {
    constructor (name) {
        this.name = name;
    }

    log (message) {
        console.log[`[${this.name}] ${message}`];
    }
}