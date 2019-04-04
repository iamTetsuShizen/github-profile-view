import Form from './Form';

class App {

    constructor(){
        console.log("new app created");
    }

    init(){
        let form = new Form();
        form.setupEventListeners();
    }
}


export default App;