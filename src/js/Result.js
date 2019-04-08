import Repository from "./Results/Repository";
import Profile from "./Results/Profile";
import Repositories from "./Results/Repositories";

export default class Result {

    constructor(result){
        this.data = result;
    }

    renderProfile(){
        console.log(this.data);
        return new Profile(this.data).render();
    }

    renderRepos(repositoriesArray) {
        return new Repositories(repositoriesArray).render();
    }
}