// Se invoca el módulo que contiene la clase
const logger = require('./logger');

// Se crea un objeto 
const dbLogger = new Object('BD') // Crear un objeto, llama por default el constructor de clase.
dbLogger.info('This is a informational message');

// Se crea un objeto 
const accesLogger = new Object('ACCESS');
accesLogger.verbose('This is a verbose message');