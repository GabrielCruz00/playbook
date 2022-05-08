import explorer from './explorer.js';

export default class viajero extends explorer {
    constructor(name, username, mission, cycle) {
        super(name, username, mission);
        this.cycle = cycle;
    }

    getGeneralInfo() {
        let nameAndUsername = this.getNameAndUsername();
        return `${nameAndUsername}, Ciclo ${this.cycle}`;
    }
}