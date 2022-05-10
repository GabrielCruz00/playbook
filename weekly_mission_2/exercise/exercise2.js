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

console.log('5) Buscar el primer explorer de CDMX');
const explorerCDMX = explorers.find(explorer => explorer.city == 'CDMX');
console.log(explorerCDMX);

console.log('6) Obtener la suma de todos los ejercicios completos');
const exeCompleted = explorers.map(exercise => exercise.exercisesCompleted)
const sumExercises = exeCompleted.reduce((sum, item) => sum + item, 0);
console.log(sumExercises);

console.log('7) Validar si algun explorer "exercisesFinished: true" en frontend');
const exeFinished = explorers.map(item => item.missions.frontend.exercisesFinished);
const expSome = exeFinished.some(item => item === true);
console.log(expSome);

console.log('8) Validar si todos los explorers tienen "isFinished: true" en onboarding');
const onboardingFinished = explorers.map(item => item.missions.onboarding.isFinished);
const expEvery = onboardingFinished.every(item => item === true);
console.log(expEvery);