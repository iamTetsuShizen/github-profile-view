import '../scss/index.scss';

import Form from './Form/Form';

new Form();

//Prevents to use enter in all the page
document.addEventListener('keydown', ev => {
    if(window.event && window.event.keyCode === 13) ev.preventDefault();
});

/*
    Author's notes:
    - todo este codigo és lo que he conseguido en un total de 6h.
    - he estado otras 6h entre domingo y lunes tratando de refactorizar el codigo y dominar la asincronidad de las llamadas a API, de momento, sin exito rotundo.
*/