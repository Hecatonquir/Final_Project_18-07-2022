import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameEvent} from "../Redux/Actions/searchName";
import { useSelector } from "react-redux";
import styles from '../Styles/Search.module.css'
import { GET_NAME_EVENTS } from "../Redux/ActionTypes/actiontypes";


export default function SearchEvent(){
    const events = useSelector(state => state.eventsBackUp)
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e){
     
        setName(e.target.value)
       

    }

    useEffect(() =>{
        getNameEvent(name,events,dispatch)

    },[name])


   function handleInputChange(e){
     
        setName(e.target.value)
        getNameEvent(name,events,dispatch)

    }
    
    return (
        <div className={styles.search}>
            <input
            type='text'
            placeholder="Search Event..."
            onChange={(e) => handleInputChange(e)}
            className={styles.input}/>
        </div>
    )
}