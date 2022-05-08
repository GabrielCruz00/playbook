console.log('Ejemplo 5: Atributos con valores por default');

class pullRequest {
    constructor (repo, tittle, linesChanged){
        this.repo = repo;
        this.tittle = tittle;
        this.linesChanged = linesChanged;
        this.status = 'OPEN';
        this.dataCreated = new Date(); //Esto guarda la fecha actual en el momento que se instancia el objeto
    }

    getInfo(){
        return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was creater on ${this.dataCreated}`;
    }
}

const myPR1 = new pullRequest('LaunchX', 'Mi Primer PR', 100);

console.log(myPR1.getInfo());
//Se pueden instanciar n cantidad de objetos de la misma clase
const myPR2 = new pullRequest('LaunchX', 'Mi Segundo PR', 99);
console.log(myPR2.getInfo());