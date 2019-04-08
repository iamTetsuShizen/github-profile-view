export default class Input {
    constructor(inputParams) {
        this.id = inputParams.id;
        this.type = inputParams.type;
        this.name = inputParams.name;
        this.placeholder = inputParams.placeholder;
    }

    render() {
        return `<input id="${this.id}" name="${this.name}" type="${type}" class="search-form__input-text" placeholder="${this.placeholder}">`;
    }

    getValue() {
        return document.getElementById(this.id).value(); 
    }
}