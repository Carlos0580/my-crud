import { User } from "../models/user";


/**
 * 
 * @param {User} user 
 */
export const userModelToLocalhost = ( user ) => {

    const { 
        id,
        avatar,
        balance,
        firstName,
        gender,
        isActive,
        lastName,
    } = user;

    return {
        id,
        avatar,
        balance,
        first_name: firstName,
        gender,
        isActive,
        last_name: lastName,

    }


}