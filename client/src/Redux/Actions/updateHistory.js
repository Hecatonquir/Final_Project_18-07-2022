import axios from 'axios';

export async function updateHistory(userID, preCartHistory){
    try {
        axios.put(`/user/updateHistory/${userID}`, preCartHistory )
    } catch(error) {
        alert(error.stack)
    }
}