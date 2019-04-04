import DOMElements from './helpers/DOMElements';

class Form {
    constructor() {}

    setupEventListeners() {
        DOMElements.searchFormSubmitButton.addEventListener('click', () => {
            let formValue = DOMElements.searchFormInput.value;
            let data = this.getUsernameInfo(formValue);
            console.log(data);
        });
    }

    getUsernameInfo(username) {
        let url = `https://api.github.com/users/${username}`;
        let data = this.fetchData(url);
        console.log(data);
        return data;
    }

    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(output => {
                console.log(output); // si faig return del JSON, el perdo, REFACTOR TIME!!
                return output; 
            })
            .catch(error => { throw error; });
    }

}

export default Form;