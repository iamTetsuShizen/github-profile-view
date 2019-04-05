import DOMElements from './helpers/DOMElements';

export default class Result {
    constructor(result){
        this.data = result;
    }

    renderProfile(){
        return `
        <div class="profile">
            <div class="profile__photo"><img src="${this.data.avatar_url}"></div>
            <div class="profile__description">
                <small class="profile__name">@${this.data.login}</small>
                <h2 class="profile__full-name">${this.data.name}</h2>
                <small class="profile__bio">${this.data.bio}</small>
            </div>
        </div>
        `;
    }

    renderRepo(repository) {
        return `
        <div class="repo">
            <h3 class="repo__title">${repository.name}</h3>
            <div class="repo__numbers">
                <div class="repo__stars">${repository.stargazers_count}</div>
                <div class="repo__fork">${repository.forks_count}</div>
            </div>
        </div>
        `;
    }

    renderRepos(repositoriesArray) {
        let html = '';
        html += `<div class="repositories">
        <h3>Repositories</h3>
        <hr>`;
        repositoriesArray.forEach(repository => {
            html += this.renderRepo(repository);
        });
        html += '</div>';
        console.log(html);
        return html;
    }

    async getRepos() {
        let html = '';
        let url = `https://api.github.com/users/${this.data.login}/repos`;

        try{
        const response = await fetch(url);
        const data =  await response.json();
            console.log(data);
        return data;
        } catch(error) {
            console.log(error);
            alert('Something went wrong! Try again later!');
        }

    }

}