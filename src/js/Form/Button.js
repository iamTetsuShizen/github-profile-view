export default class Button {
    constructor(id, text, onClickFunction = () => {}) {
        this.id = id;
        this.text = text;
        this.onClickFunction = onClickFunction;
    }

    render() {
        return `<button id="${this.id}" class="search-form__search-button">${this.text}</button>`;
    }

    onClick() {
        document.getElementById('button').addEventListener('click', this.onClickFunction);
    }
}