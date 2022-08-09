import axios from "axios";
import swal from "sweetalert";
import emailjs from '@emailjs/browser';


export default async function get2FA(id, userEmail) {

    // ID para servicio de mailing
    const SERVICE_ID = 'service_y1hcd5d' // cuenta de google: customers.mainstage@gmail.com
    const TEMPLATE_ID = 'template_p780upm'  // Two factor Authentication template
    const PUBLIC_KEY = '5_m-uTWTRGUxgzYAN'
    
    try {
        let data = await axios.put("/user/get2fa", {id: id})
        
        /////////////////////////Envio de mail de token 2FA //////////////////////////////
        const templateParams = { token2FA: data.data,
                                 userEmail: userEmail };
        console.log(templateParams)
    
        emailjs.send( SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY )
            .then((result) => { console.log(result.text); } , (error) => { console.log(error.text); });
        /////////////////////////////////////////////////////////////////////////////////////////////

        swal({text: `${data.data}. Please keep it safe`, icon: "success"})

    }catch (error) {
        swal({text: error.response.data, icon:"error"})
    }



}