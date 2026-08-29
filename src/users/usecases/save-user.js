import { User } from'../models/user'
import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper'

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async( userLike) => {


    const user = new User( userLike )

    if( !user.firstName || user.lastName )
        throw 'First & Last Name are required' 

    const userToSave = userModelToLocalhost ( user );

    if( user.id ) {
        return;

    }

    const updateUser = await createUser( userToSave );
    return updateUser;    

}
/**
 * 
 * @param {Like<User>} user
 */
const createUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log({ newUser });

    return newUser;
    
}


/**
 * 
 * @param {Like<User>} user
 */
const updateUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ user.id }`;
    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const updateUser = await res.json();
    console.log({ updateUserr });

    return updateUser;
    
}