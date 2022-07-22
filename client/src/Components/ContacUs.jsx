import React, {useState} from 'react';
import {useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { postSupports } from '../Redux/Actions/postSupports';
import styles from '../Styles/ContactUs.module.css'

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
            <nav className={styles.nav}>
            <Link to= '/'>
            <button className={styles.Button}>Back</button>
            </Link>
            </nav>
            <div className={styles.container}>
                <h4 className={styles.title}>Contact Us</h4>
                <form className={styles.form} onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Tell Us your problem</label> 
                    <select className={styles.select}>
                            <option hidden>select options</option>
                            <option>return tickets</option>
                            <option>problems with the pay</option>
                            <option>inappropriate event</option>
                            <option>suggestions</option>
                            <option>report bugs</option>
                            <option>others</option>
                    </select>
                            <textarea className={styles.text} id="exampleFormControlTextarea1" rows="3" type='text' name='note' value={note.note} onChange={handleChange}></textarea>
                </div>
                    <div className={styles.divButton}>
                        <button className={styles.Button2} type='submit'>Create Note</button> 
                    </div>
                </form>
            </div>
        </div>
   );

}
