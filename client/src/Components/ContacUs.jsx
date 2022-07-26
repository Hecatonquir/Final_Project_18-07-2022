import React, {useState} from 'react';
import {useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import { postSupports } from '../Redux/Actions/postSupports';
import styles from '../Styles/ContactUs.module.css'
import swal from 'sweetalert'
import { MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBContainer
  } from 'mdb-react-ui-kit';

export default function ContactUs(){
     const dispatch = useDispatch()
     const [basicModal, setBasicModal] = useState(false);
  
    const toggleShow = () => setBasicModal(!basicModal);
    const [note, setNote] = useState({
        reason:"",
        problemType:""
    })

    const handleChange = function (e){
         setNote({
            ...note,
            [e.target.name]: e.target.value
            
        })}

     function handleSubmit(e){
        e.preventDefault();
        if(note.reason.length > 0 && note.problemType.length > 0){
       dispatch(postSupports(note))
       // alert("Note was created successfully")
        setNote({reason:"",
        problemType:""})
        }else{
            swal(
                "fill formulary",{
                    icon:"warning"
                })
           
                
        }}

    return (
        <div>
           {/*  <nav className={styles.nav}>
            <Link to= '/'>
            <button className={styles.Button}>Back</button>
            </Link>
            </nav> */}
              <a className={styles.white} onClick={toggleShow}>ContacUs</a>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='1'>
            <MDBContainer>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                {/* <MDBModalTitle>Modal title</MDBModalTitle> */}
                
                <h4 className={styles.title}>Contact Us</h4>
                <form className={styles.form} /* onSubmit={handleSubmit} */>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Tell Us your problem</label> 

                    <select className={styles.select} value={note.problemType} name="problemType" onChange={handleChange}>

             
                            <option hidden>select options</option>
                            <option>return tickets</option>
                            <option>problems with the pay</option>
                            <option>inappropriate event</option>
                            <option>suggestions</option>
                            <option>report bugs</option>
                            <option>others</option>
                    </select>
                    </div>
                    </form>
                   
                    
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody> <textarea className={styles.text} id="exampleFormControlTextarea1" rows="3" type='text' name='reason' value={note.reason} onChange={handleChange}></textarea></MDBModalBody>
                
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                  Close
                 
                   
                </MDBBtn>
                <div className={styles.divButton}>
                        <button onClick={handleSubmit} className={styles.Button2} type='submit'>Create Note</button> 
                    </div>
                {/* <MDBBtn>Save changes</MDBBtn> */}
              </MDBModalFooter>
            </MDBModalContent>
            
          </MDBModalDialog>
          </MDBContainer>
        </MDBModal>
              
                    
        </div>      
                
           
        
   );

}

  
  
    
  
  