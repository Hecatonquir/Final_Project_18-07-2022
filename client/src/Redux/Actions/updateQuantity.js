import axios from 'axios';
import swal from 'sweetalert';

export async function updateQuantity({ID, newStock}) {
        try {
            axios.put('/event/updateQuantity', {ID, newStock} )
        } catch(error) {
            swal(error.response.data)
        }
    
}