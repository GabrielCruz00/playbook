// Al exportar una función/objeto así:
// > module.exports.verbose

// Estaremos exportando el contenido con el nombre 'verbose'

// module.exports hara que se pueda invocar la función en otro script como: 
// > const logger = require('./logger')

// y usarla como: 
// > logger.verbose("Heey")

module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`);
}