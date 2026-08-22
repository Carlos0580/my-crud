import usersStore from './store/users-store';
import { renderTable } from './presentation/render-table/render-table';
import { renderButtons } from './presentation/render-buttons/render-buttons';

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


        
}

