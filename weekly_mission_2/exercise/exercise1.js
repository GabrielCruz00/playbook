const repo = {
    name: 'LaunchX',
    author: 'GabrielCruz00',
    language: 'JavaScrpt',
    numberOfCommits: 59,
    stars: 0,
    forks: 0,
    issuesOpen: 0,
    issuesClose: 0,

    getTotalIssues: function() {
        return this.issuesClose + this.issuesOpen;
    },
    getGeneralInfo: function() {
        return `This repository ${this.name} was created by ${this.author}`;
    }
}
console.log('Modelado de Repo');
console.log('Nombre del repo: ' + repo.name);
console.log('Issues totales: ' + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

const issue = {
    tittle: 'Ejercicio 1 - Semana 2',
    repositoryNameAssociated: 'LaunchX',
    status: 'CLOSE',
    numberOfComments: '160',
    labels: ['JavaScript', 'Modelado de Información'],
    author: 'GabrielCruz00',
    dateCreated: '11 de Abril 2022',
    lastUpdate: new Date(),

    getTittleAndAuthor: function() {
        return `Issue: ${this.tittle}, Author: ${this.author}`;
    },

    getGeneralInfo: function(){
        return `Issue: ${this.tittle}, Status: ${this.status},`;
    }
}

console.log('Modelado de Issue');
console.log(issue.getTittleAndAuthor());
console.log(issue.getGeneralInfo());

const pullRequest = {
    tittle: 'Modificando estilos',
    branchName: 'Styles',
    dateCreated: new Date(),
    status: 'OPEN',
    repositoryNameAssociated: 'LaunchX',

    getStatus: function() {
        return `Status: ${this.status}`;
    },

    getTittleAndName: function(){
        return `PullRequest: ${this.tittle}, Repository: ${this.repositoryNameAssociated}`;
    }
}

console.log('Modelado de PR');
console.log(pullRequest.tittle);
console.log(pullRequest.getStatus());
console.log(pullRequest.getTittleAndName());