import axios from "axios"
import swal from "sweetalert"
import emailjs from '@emailjs/browser';

export default async function ticketReply(answer, id, emailCustomer, reason, problemType) {

    // ID para servicio de mailing
    const SERVICE_ID = 'service_y1hcd5d' // cuenta de google: customers.mainstage@gmail.com
    const TEMPLATE_ID = 'template_a5xwjua'  // Customer support template
    const PUBLIC_KEY = '5_m-uTWTRGUxgzYAN'
    
    /////////////////////////Envio de mail de respuesta al cliente //////////////////////////////
    const templateParams = {
        ticketID: id,
        emailCustomer: emailCustomer,
        problemType: problemType,
        reason: reason,
        answer: answer,
      };
      console.log(templateParams)

    emailjs.send( SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY )
        .then((result) => { console.log(result.text); } , (error) => { console.log(error.text); });
    /////////////////////////////////////////////////////////////////////////////////////////////
    
    try {
        console.log('Entered to try catch')
        let reply = axios.put(`/support/reply/${id}`, {data: answer})
        console.log(reply)

        swal({title: "Done", text: `Answer has been sent to ${emailCustomer}`, icon: "success"})
        
    }catch (error) {
        console.log(error.stack)
        swal({title: "Error", text: "Cannot send at this moment", icon: "error"})   
    };

}