import {explorers} from './explorersList.js';

console.log('1) Imprimiendo el nombre de cada explorer');
explorers.forEach( explorer => console.log(explorer.name));

console.log('2) Imprimiendo el stack de cada explorer');
explorers.forEach(explorer => console.log(`${explorer.name}: ${explorer.stack}`));

console.log('3) Creando una nueva lista de stacks');
const stacks = explorers.map(item => item.stack);
console.log(stacks);

console.log('4) Lista de explorers con stack: js');
const stackJS = explorers.filter(item => item.stack.includes('js'));
console.log(stackJS);