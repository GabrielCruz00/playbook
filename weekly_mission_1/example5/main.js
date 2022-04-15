const logger = require('./logger');
const customLogger = new logger.constructor('COSTUME')
// Se puede usar directamente el objeto instanciado en el módulo logger
logger.log('This is an informational message');
customLogger.log('This is a new informational message');

// También se puede instanciar un nuevo objeto de la siguiente manera 

    // const customLogger = new logger.construtor('CUSTOM');
    //customLogger.log('This is an informational message in a custom logger');