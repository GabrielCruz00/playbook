// Export default permite exportat esta clase

export default class logger {
    constructor (name) {
        this.name = name;
    }

    log (message) {
        console.log(`[${this.name}] ${message}`);
    }
}