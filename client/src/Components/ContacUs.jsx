import React, {useState} from 'react';
import {useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { postSupports } from '../Redux/Actions/postSupports';

export default function ContactUs(){
     const dispatch = useDispatch();
    const [note, setNote] = useState("")
        
    const handleChange = function (e){
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
   <div class="form-group">
       <label for="exampleFormControlTextarea1">Tell Us your problem</label>
               <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" type='text' name='note' value={note.note} onChange={handleChange}></textarea>
   </div>
       <div>
         <button class="btn btn-outline-info" type='submit'>Create Note</button> 
    </div>
</form>
<Link to= '/'>
            <button class="btn btn-outline-success"> go Back</button>
        </Link>
        </div>
   );

}
<div>
<label >Example textarea</label>
<textarea ></textarea>
</div>