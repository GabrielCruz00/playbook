/*
    Consideraciones: 
        -requiere('./logger') instancia el objeto creado
        -requiere('./logger').logger regresa la clase
*/
require('./logger').customMessage = function() {
    console.log('This is a new functionality');
}