import React, {useState} from 'react';
import {useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { postSupports } from '../Redux/Actions/postSupports';

export default function ContactUs(){
     const dispatch = useDispatch();
    const [note, setNote] = useState("")
        
    const handleChange = function (e){
        console.log("soy la consola",e.target.value)
        setNote({
            ...note,
            [e.target.note]: e.target.value
            
        })}

       
     function handleSubmit(e){
        e.preventDefault();
        if(note.note){
       dispatch(postSupports(note.note))
        alert("Note was created successfully")
        setNote({note:''})
        }}



    return (
        <div>
<form onSubmit={handleSubmit}>
   <div>
       <label>Tell Us your problem</label>
               <textarea type='text' name='note' value={note.note} onChange={handleChange}></textarea>
   </div>
       <div>
         <button type='submit'>Create Note</button> 
    </div>
</form>
<Link to= '/'>
            <button> go Back</button>
        </Link>
        </div>
   );

}
