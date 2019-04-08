export default class Error {
    constructor(message){
        this.message = message;
    }

    render() {
        return `<div class="result-error"><p>Error: ${this.message}</p></div>`;
    } 
}