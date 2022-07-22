import axios from "axios"



export function postSupports(payload){
  console.log("soy el soporte",payload)
    return async () => {
      try {
        var createNote=  await axios.post("http://localhost:3001/support/",payload);
         alert("note created")

      } catch (error) {
       alert("note not created")
        console.log(error);
      }
    };
  }; 