import {explorers} from './explorersList.js';

console.log('1) Imprimiendo el nombre de cada explorer');
explorers.forEach( explorer => console.log(explorer.name));

console.log('2) Imprimiendo el stack de cada explorer');
explorers.forEach(explorer => console.log(`${explorer.name}: ${explorer.stack}`));