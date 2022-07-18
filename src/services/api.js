import axios from 'axios';

/**
 * Deleta a conta
 * 
 * @param {String} url 
 * @returns 
 */
 export function deleteAccount(url, id, token){
    return axios.post(`${url}`, { id: id, token: token });
}

