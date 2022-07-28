import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postSupports } from '../Redux/Actions/postSupports';
import styles from '../Styles/ContactUs.module.css';
import swal from 'sweetalert';
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

export default function ContactUs() {
	const dispatch = useDispatch();
	const [basicModal, setBasicModal] = useState(false);


	const toggleShow = () => setBasicModal(!basicModal);
	const [note, setNote] = useState({
		reason: '',
		problemType: '',
	});


	
  
  


	function handleChange(e) {
       setNote({
			...note,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (note.reason.length > 0 && note.problemType.length > 0) {
			postSupports(note);
			// alert("Note was created successfully")
			setNote({ reason: '', problemType: '' });
		} else {
			swal('Fill Formulary', {
				icon: 'warning',
			});
      setNote({ reason: '', problemType: '' });
    }
	}

	return (
		<div>
			{/*  <nav className={styles.nav}>
            <Link to= '/'>
            <button className={styles.Button}>Back</button>
            </Link>
            </nav> */}
			<a className={styles.white} onClick={toggleShow}>
				ContacUs
			</a>
			<MDBModal show={basicModal} setShow={setBasicModal} tabIndex='1'>
				<MDBContainer>
					<MDBModalDialog>
						<MDBModalContent>
							<MDBModalHeader>
								{/* <MDBModalTitle>Modal title</MDBModalTitle> */}

								<h4 className={styles.title}>Contact Us</h4>
								<form className={styles.form} /* onSubmit={handleSubmit} */>
									<div class='form-group'>
										<label for='exampleFormControlTextarea1'>Tell Us your problem</label>

										<select
											className={styles.select}
											value={note.problemType}
											name='problemType'
											onChange={handleChange}>
											<option hidden>Select Options</option>
											<option>return tickets</option>
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
								<MDBBtn color='secondary' onClick={toggleShow}>
									Close
								</MDBBtn>
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
