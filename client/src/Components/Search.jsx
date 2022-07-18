import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameEvent} from "../../action";


export default function SearchEvent(){
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value);

    }
    function handleSubmit(e){
        e.preventDefault()
        if(name){
            dispatch(getNameEvent())
        }
        setName("")
    }
    return (
        <div>
            <input
            type='text'
            placeholder="Search Event..."
            onChange={(e) => handleInputChange(e)}/>

            <button type='submit' onClick={(e) => handleSubmit(e)}> Search </button>
        </div>
    )
}