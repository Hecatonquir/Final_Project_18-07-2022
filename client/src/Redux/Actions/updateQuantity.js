import axios from 'axios';

export async function updateQuantity(ID, newStock) {
    try {
        let updateStock = await axios.put('/event/updateQuantity', { ID: ID, 
                                                                     newStock: newStock })
    } catch(error) {
        alert(error.response.data)
    }
}