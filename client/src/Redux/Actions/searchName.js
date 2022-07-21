import axios from "axios";
import { SHOW_EVENTS_USER } from "../ActionTypes/actiontypes";


export function getNameEvent(name, events,dispatch){
    

       let foundName= events.filter(el => {
            if(el.Name.toLowerCase().includes(name.toLowerCase())) return el
        })

        dispatch({type:SHOW_EVENTS_USER, payload: foundName})

    
    }
    