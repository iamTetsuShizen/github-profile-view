import Repository from './Repository';

export default class Repositories {

    constructor(repos) {
        this.repositoriesList = repos;
        console.log(this.repositoriesList);
    }

    render() {
        let html = '';
        html += `<div class="repositories">
        <h3>Repositories</h3>
        <hr>
        <div class="repositories__list">
        `;
        this.repositoriesList.forEach(repository => {
            html += new Repository(repository).render();
        });
        html += '</div></div>';

        return html;
    }
}