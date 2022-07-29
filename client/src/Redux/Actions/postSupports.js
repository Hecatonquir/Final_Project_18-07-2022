import axios from "axios"
import swal from 'sweetalert'


export async function postSupports(payload){
  console.log("soy el soporte")
   
      try {
         await axios.post("http://localhost:3001/support/createTicket",payload);
         
         swal({title:"Ticket Created!",
         text: "You'll receive an answer from Support as soon as possible",
          icon: "success",
        })

      } catch (error) {
       swal("Sorry, we cant send your inquiry at this moment...",{
        icon:"error"
       })
        console.log(error);
      }
    };
