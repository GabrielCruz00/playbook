export class repo {
    constructor(name, author,language){
        this.name = name;
        this. author = author;
        this .language = language;
        this. numberOfCommits = 0;
        this.stars = 0;
        this.forks = 0;
        this.issuesOpen = 0;
        this.issuesClose = 0;
    }

    getTotalIssues(){
        return this.issuesOpen + this.issuesClose;
    }
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`;
    }
}

export class issue {
    constructor(tittle, repoName, author, labels){
        this.tittle = tittle;
        this.repoName = repoName;
        this.author = author;
        this.labels = labels;
        this.status = 'OPEN';
        this.update = new Date();
        this.comments = 0;
    }

    getTittleAndAuthor(){
        return `Issue: ${this.tittle}, Author: ${this.author}`;
    }
    getGeneralInfo(){
        return `Issue: ${this.tittle}, Author: ${this.status}`;
    }
}

export class pullRequest {
    constructor(tittle, branchName, repoName){
        this.tittle = tittle;
        this.branchName = branchName;
        this.repoName = repoName;
        this.status = 'OPEN';
        this.date = new Date();
    }

    getStatus(){
        return `Status: ${this.status}`;
    }
    getTittleAndName(){
        return `PullRequest: ${this.tittle}, Repository: ${this.repoName}`;
    }
}