import DOMElements from './helpers/DOMElements';

import Error from './Error';
import Result from './Result';

export default class Form {
    constructor() {}

    setupEventListeners() {
        DOMElements.searchFormSubmitButton.addEventListener('click', () => {
            let formValue = DOMElements.searchFormInput.value;
            this.getData(formValue);
        });
    }

    getData(username) {
        let url = `https://api.github.com/users/${username}`;

        fetch(url)
            .then(response => response.json())
            .then(output => { 
                DOMElements.resultContainer.innerHTML = "";    
                if(output.message){
                    let searchError = new Error(output.message);
                    DOMElements.resultContainer.innerHTML = searchError.render();

                } else {
                    let userInfoResult = new Result(output);
                    DOMElements.resultContainer.innerHTML = userInfoResult.renderProfile();
                    userInfoResult.getRepos()
                    .then(data =>DOMElements.resultContainer.innerHTML += userInfoResult.renderRepos(data));
 
                }
            })
            .catch(error => { throw error; });
    }
        

}