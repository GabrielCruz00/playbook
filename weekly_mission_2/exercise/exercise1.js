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