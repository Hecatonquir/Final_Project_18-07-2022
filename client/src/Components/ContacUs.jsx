import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postSupports } from '../Redux/Actions/postSupports';
import styles from '../Styles/ContactUs.module.css';
import swal from 'sweetalert';
import { decodeToken } from 'react-jwt';

import {
	MDBBtn,
	MDBModal,
	MDBModalDialog,
	MDBModalContent,
	MDBModalHeader,
	MDBModalBody,
	MDBModalFooter,
	MDBContainer,
} from 'mdb-react-ui-kit';
import { getUserDetails } from '../Redux/Actions/getUserDetails';

export default function ContactUs() {

	let token = document.cookie.split(';')[0];
	let token1 = token.split('=')[1];
	let tokenDecoded = decodeToken(token1);
	const dispatch = useDispatch();
	const [basicModal, setBasicModal] = useState(false);


	const toggleShow = () => setBasicModal(!basicModal);
	const [note, setNote] = useState({
		reason: '',
		problemType: '',
		emailCustomer: '',
	});

	


	function handleChange(e) {
       setNote({
			...note,
			[e.target.name]: e.target.value,
		});
		             


	} 
				const reMedio =	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	/* const reMedio = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/ */
	function handleSubmit(e) {
		e.preventDefault();
		
		if (note.reason.length > 0 && note.problemType.length > 0 && note.emailCustomer.length > 0 && reMedio.test(note.emailCustomer)) {
			console.log(note)
			postSupports(note,tokenDecoded ? tokenDecoded.id: null, dispatch);

			// alert("Note was created successfully")
			setNote({ reason: '', problemType: '',emailCustomer: '' });
		} else {
			swal("Please Fill all Formulary inputs: reason, problem message and Email", {
				icon: 'warning',
			});
      setNote({ reason: '', problemType: '',emailCustomer: '' });
    }
	}

	return (
		<div>
			{/*  <nav className={styles.nav}>
            <Link to= '/'>
            <button className={styles.Button}>Back</button>
            </Link>
            </nav> */}
			<h4 onClick={toggleShow}>
				ContacUs
			</h4>
			<MDBModal show={basicModal} setShow={setBasicModal} tabIndex='1'>
				<MDBContainer>
					<MDBModalDialog>
						<MDBModalContent>
							<MDBModalHeader>
								{/* <MDBModalTitle>Modal title</MDBModalTitle> */}

								<h4 className={styles.title}>Contact Us</h4>
								<form className={styles.form} /* onSubmit={handleSubmit} */>
									<div className='form-group'>
										<label htmlFor='exampleFormControlTextarea1'>Tell Us your problem</label>

										<select
											className={styles.select}
											value={note.problemType}
											name='problemType'
											onChange={handleChange}>
											<option hidden>Select Options</option>
											<option>Return Tickets</option>
											<option>Troubles with payment</option>
											<option>Inappropriate Event</option>
											<option>Suggestions</option>
											<option>Report Bugs</option>
											<option>Others</option>
										</select>
									</div>
									
								</form>

								<MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
							</MDBModalHeader>
							<MDBModalBody>
								
								<textarea
									className={styles.text}
									id='exampleFormControlTextarea1'
									rows='3'
									type='text'
									name='reason'
									value={note.reason}
									onChange={handleChange}></textarea>
								
							</MDBModalBody>
							
							<MDBModalFooter>
							
							<div> 
								   <label htmlFor="Name">Your Email:</label>
										<input 
										className={styles.mail}
										type="email" 
										name='emailCustomer'
										value={note.emailCustomer}
										onChange={handleChange}/>										
									</div>
								<button className={styles.close} onClick={toggleShow}>
									Close
								</button>
								<div className={styles.divButton}>
									<button onClick={handleSubmit} className={styles.Button2} type='submit'>
										Create Note
									</button>
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
