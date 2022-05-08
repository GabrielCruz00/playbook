import viajero from './viajero.js';

const viajero1 = new viajero ('Carlo', 'LaunchX', 'NodeJS', 'Abril 2022');
console.log(viajero1);
console.log(viajero1.getNameAndUsername()); //Metodo de la clase padre
console.log(viajero1.getGeneralInfo()); //Metodo de la clase hija