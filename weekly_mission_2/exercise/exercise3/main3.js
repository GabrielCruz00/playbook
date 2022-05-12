import {repo, issue, pullRequest} from './exercise3.js';

const repoExplorer1 = new repo('LaunchX', 'Gabriel', ['JavaScript'])
console.log(repoExplorer1.getGeneralInfo());
console.log(repoExplorer1.language);

const issueExplorer1 = new issue('Ejercicio 3 - Semana 2', 'LaunchX', 'Gabriel', ['JavaScript', 'Modelado de Clases']);
console.log(issueExplorer1.getGeneralInfo());
console.log(issueExplorer1.labels);

const prExplorer1 = new pullRequest('Modificando estilos', 'Styles', 'LaunchX');
console.log(prExplorer1.getGeneralInfo());
console.log(prExplorer1.branchName);