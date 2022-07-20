import axios from "axios"
import { POST_SUPPORTS } from "../ActionTypes/actiontypes";


export function postSupports(payload){
    return async (dispatch) => {
      try {
        var createNote= await axios.post("http://localhost:3001/",payload);
         alert("note create")

      } catch (error) {
    
        console.log(error);
      }
    };
  }; 