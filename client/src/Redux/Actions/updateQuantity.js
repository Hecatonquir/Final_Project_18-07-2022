import axios from 'axios';

export async function updateQuantity({ID, newStock}) {
        try {
            axios.put('/event/updateQuantity', {ID, newStock} )
        } catch(error) {
            alert(error.response.data)
        }
    
}