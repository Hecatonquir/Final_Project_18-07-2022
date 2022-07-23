import axios from "axios"
import swal from 'sweetalert'


export function postSupports(payload){
  console.log("soy el soporte",payload)
    return async () => {
      try {
         await axios.post("http://localhost:3001/support/",payload);
         
         swal("Note Created!", {
          icon: "success",
        })

      } catch (error) {
       swal("Note Not Created!",{
        icon:"error"
       })
        console.log(error);
      }
    };
  }; 