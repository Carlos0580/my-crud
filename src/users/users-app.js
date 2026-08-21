import usersStore from './store/users-store';
import { renderTable } from './presentation/render-table/render-table';

/**
 * 
 * @param {HTMLDivEement} element 
 */


export const UserApp = async( element ) => {

    element.innertHTML = 'Loading...'
    await usersStore.loadNextPage();
        element.innertHTML = '';

    // console.log( usersStore.getUsers());

    renderTable( element );


}

