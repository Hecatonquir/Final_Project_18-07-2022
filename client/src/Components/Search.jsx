import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameEvent} from "../Redux/Actions/searchName";
import { useSelector } from "react-redux";
import styles from '../Styles/Search.module.css'
import { GET_NAME_EVENTS } from "../Redux/ActionTypes/actiontypes";
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
  } from '@chakra-ui/react'


export default function SearchEvent({search, setSearch}){
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
        setSearch(e.target.value)
        setName(e.target.value)
        getNameEvent(name,events,dispatch)

    }
    
    return (
        <>
            <Editable   value={search} id="searchBar" placeholder='Search Event...' fontSize='1em'borderRadius='5px' bg='#EEEEEE' textAlign='center' className={styles.search}>
            <EditablePreview />
            <EditableInput onChange={(e) => handleInputChange(e)} />
            </Editable>
        </>
    )
}