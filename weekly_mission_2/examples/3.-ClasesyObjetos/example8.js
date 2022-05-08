console.log('Ejemplo 8: Métodos static');
// Nos ayudan a escribir metodos en una clase que podemos usar sin necesidad de isntancian algún objeto

class toolbox {
    static getMostUsefulTools() {
        return ['Command line', 'git', 'Text Editor'];
    }
}

console.log(toolbox.getMostUsefulTools());

const tools = new toolbox();

console.log(tools);