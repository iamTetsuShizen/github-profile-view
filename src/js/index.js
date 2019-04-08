import '../scss/index.scss';

import Form from './Form/Form';
import Input from './Form/Input';
import Button from './Form/Button';

import Profile from './Results/Profile';
import Error from './Results/Error';
import Repositories from './Results/Repositories';
import Repository from './Results/Repository';

const appNode = document.getElementById('app');
console.log(appNode);

let inputConfig = {
    id: "userInput",
    type: "text",
    name:"user",
    placeholder: "Search username..."
};

let buttonConfig = {
    id: "searchButton",
    text: "Search",
    onClickFunction: event => {
        alert(event);
    }
};

console.log(new Input(inputConfig));
console.log(new Button(buttonConfig));


//OLD
new Form();

//Prevents to use enter in all the page
document.addEventListener('keydown', ev => {
    if(window.event && window.event.keyCode === 13) ev.preventDefault();
});




//TEST


/*
let profile = new Profile({
    avatar:"https://www.w3schools.com/howto/img_avatar.png",
    login :"adri",
    name :"Adrian Peso",
    bio : "bio bonica"
});
document.querySelector("#app").innerHTML = profile.render();
*/

/*
let repos = new Repositories([
    { name: "repo name", stargazers_count: 3, forks_count: 9},
    { name: "repo name", stargazers_count: 4, forks_count: 9},
    { name: "repo name", stargazers_count: 5, forks_count: 9},
    { name: "repo name", stargazers_count: 6, forks_count: 9}
]);
let prova = document.querySelector("#app");

prova.innerHTML = repos.render();

*/


///getters 
/*

retrieveUser(username) {
    let url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => {
            this.clearResultContainer();
            if(response.status === 404) {
                DOMElements.resultContainer.innerHTML = (new Error(response.statusText)).render();
            } else {
                response.json().then(output => this.outputResult(output));
            }
        })
        .catch(error => { throw error; });
}

function async getRepositories(){
    let url = `https://api.github.com/users/${this.data.login}/repos`;

    try{
    const response = await fetch(url);
    const data =  await response.json();

    return data;

    } catch(error) {
        alert('Something went wrong! Try again later!');
    }
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
    */