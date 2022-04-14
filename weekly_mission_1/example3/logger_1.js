// module.exports permite invocar la función en otro script como: 
// > const logger = require('./logger')

// y utilizarla como: 
// logger("heery")

module.exports = (message) => {
    console.log(`info: ${message}`);
}