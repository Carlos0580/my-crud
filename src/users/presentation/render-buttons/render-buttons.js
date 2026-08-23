import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {

    const nextButton = document.createElement( 'button' );
    nextButton.innerText = ' Next >';

    const prevButton = document.createElement( 'button' );
    prevButton.innerText = ' < Prev ';

    const currentPageLabel = document.createElement( 'span' );
    // Corregido: Se quitan los espacios alrededor del ID
    currentPageLabel.id = 'current-page'; 
    currentPageLabel.innerText = usersStore.getCurrentPage();

    // 1. Crear contenedor horizontal para aislar los botones
    const buttonsContainer = document.createElement( 'div' );
    buttonsContainer.className = 'buttons-container';

    // 2. Insertar los elementos dentro del nuevo contenedor
    buttonsContainer.append( prevButton, currentPageLabel, nextButton );

    // 3. Agregar el contenedor a element
    element.append( buttonsContainer );

    nextButton.addEventListener( 'click', async() => {
        await usersStore.loadNextPage(); 
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
    });

    prevButton.addEventListener( 'click', async() => {
        await usersStore.loadPreviousPage(); 
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
    });

}