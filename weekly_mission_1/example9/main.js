const pokemon = require ('./pokemon');

const pikachu = new pokemon('pikachu');
const bulbasaur = new pokemon('bulbasaur');
const squirtle = new pokemon('squirtle');
const charmander = new pokemon('charmander');

pikachu.sayHello();
pikachu.sayMessage('Heey!');

bulbasaur.sayHello();
bulbasaur.sayMessage('Heey! x2');

squirtle.sayHello();
squirtle.sayMessage('Heey! x3');

charmander.sayHello();
charmander.sayMessage('Heey! x4');