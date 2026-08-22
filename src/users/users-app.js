import usersStore from './store/users-store';
import { renderTable } from './presentation/render-table/render-table';
import { renderButtons } from './presentation/render-buttons/render-buttons';
import { renderAddButton } from './presentation/render-add-button/render-add-button'
 
/**
 * 
 * @param {HTMLDivEement} element 
 */


export const UserApp = async( element ) => {

    element.innertHTML = 'Loading...'
    await usersStore.loadNextPage();
        element.innertHTML = '';



        renderTable( element );
        renderButtons( element );
        renderAddButton( element );



        
}

