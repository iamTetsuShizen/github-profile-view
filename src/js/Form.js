import DOMElements from './helpers/DOMElements';

import Error from './Error';
import Result from './Result';

export default class Form {
    
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        DOMElements.searchFormSubmitButton.addEventListener('click', () => {
            this.retrieveUser(DOMElements.searchFormInput.value);
        });

        document.addEventListener('keydown', ev => {
            if(window.event && window.event.keyCode === 13) ev.preventDefault();
        });
    }

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

    outputResult(result) {
        let userInfoResult = new Result(result);
        DOMElements.resultContainer.innerHTML = userInfoResult.renderProfile();
        userInfoResult.getRepos()
            .then(data => DOMElements.resultContainer.innerHTML += userInfoResult.renderRepos(data));
    }

    clearResultContainer() {
        DOMElements.resultContainer.innerHTML = "";
    }

}