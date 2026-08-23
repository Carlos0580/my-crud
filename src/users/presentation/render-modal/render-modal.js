import modalHTML from './render-modal.html?raw';
import './render-modal.css';

let modal, form;

//TODO cargar usuarios por id 
export const showModal = () => {
    modal?.classList.remove( 'hide-modal' );

}

//TODO Reset del formulario
export const hideModal = () => {
    modal?.classList.add( 'hide-modal' );

}

/**
 * 
 * @param {HTMLDivElement} element 
 * @returns 
 */

export const renderModal = ( element ) => {

   if( modal ) return;

    modal = document.createElement( 'div' );
    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector( ' form' );

    modal.addEventListener( 'click', ( event) => {
        if( event.target.className === 'modal-container') {
            hideModal();
        }
    });

    form.addEventListener( 'submit', ( event) => {
        event.preventDefault();

        console.log( 'Formulario enviado' );
    });

    element.append( modal );

}

