import Profile from "./Results/Profile";
import Repositories from "./Results/Repositories";

export default class Result {

    constructor(result){
        this.data = result;
    }

    renderProfile(){
        return new Profile(this.data).render();
    }

    renderRepos(repositoriesArray) {
        return new Repositories(repositoriesArray).render();
    }

    async getRepos() {
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