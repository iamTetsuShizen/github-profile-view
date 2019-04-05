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
                <div class="repo__stars">${addStarIcon()} ${repository.stargazers_count}</div>
                <div class="repo__fork">${addForkIcon()} ${repository.forks_count}</div>
            </div>
        </div>
        `;

        function addStarIcon() {
            return `<svg class="octicon octicon-star mr-1" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>`;
        }

        function addForkIcon() {
            return `<svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>`;
        }
    }

    renderRepos(repositoriesArray) {
        let html = '';
        html += `<div class="repositories">
        <h3>Repositories</h3>
        <hr>
        <div class="repositories__list">
        `;
        repositoriesArray.forEach(repository => {
            html += this.renderRepo(repository);
        });
        html += '</div></div>';

        return html;
    }

    async getRepos() {
        let html = '';
        let url = `https://api.github.com/users/${this.data.login}/repos`;

        try{
        const response = await fetch(url);
        const data =  await response.json();

        return data;

        } catch(error) {
            alert('Something went wrong! Try again later!');
        }

    }

}