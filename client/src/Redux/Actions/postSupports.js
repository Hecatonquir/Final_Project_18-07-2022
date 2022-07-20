import axios from "axios"



export function postSupports(payload){
    return async (dispatch) => {
      try {
        var createNote= await axios.post("http://localhost:3001/support",payload);
         alert("note create")

      } catch (error) {
    
        console.log(error);
      }
    };
  }; 