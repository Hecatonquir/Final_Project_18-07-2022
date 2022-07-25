import { React, useState } from 'react';
/* import { useDispatch } from 'react-redux'; */
import { Link /* , useNavigate */ } from 'react-router-dom';
import { postEvent } from '../Redux/Actions/postEvent';
import styles from '../Styles/AddEvent.module.css';
import validate from './Validations';

function AddEvent() {
	/* 	const dispatch = useDispatch();
	const history = useNavigate(); */

	const [errors, setErrors] = useState({});
	const Cities = ['CABA', 'La Plata', 'La Pampa', 'Bariloche'];
	const Categories = ['Boliche', 'Recital', 'Musical'];

	let [input, setInput] = useState({
		Name: '',
		img1: '',
		img2: '',
		img3: '',
		img4: '',
		Price: '',
		Quantity: '',
		Rating: '',
		Restrictions: '',
		City: '',
		Location: '',
		Date: '',
		Hour: '',
		Detail: '',
		Category: ''
	});

	function handleChange(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (errors.check !== 'approved') {
			alert('Not created');
		} else {
			postEvent({
				Name: input.Name,
				Image: [input.img1, input.img2, input.img3, input.img4],
				Price: Number(input.Price),
				Quantity: Number(input.Quantity),
				Rating: Number(input.Rating),
				Category: [input.Category],
				Restrictions: input.Restrictions.split('/'),
				City: input.City,
				Location: input.Location,
				Date: input.Date,
				Hour: input.Hour,
				Detail: input.Detail,
			});

			setInput({
				Name: '',
				img1: '',
				img2: '',
				img3: '',
				img4: '',
				Price: '',
				Quantity: '',
				Rating: '',
				Restrictions: '',
				City: '',
				Location: '',
				Date: '',
				Hour: '',
				Detail: '',
			});
		}
	}

	return (
		<div>
			<nav className={styles.nav}>
				<Link to={'/'}>
					<button className={styles.Button}>Back</button>
				</Link>
			</nav>
			<div className={styles.container}>
				<h1 className={styles.title}>Add Event</h1>
				<form className={styles.form}>
					<div>
						<label htmlFor='Name'><span style={{ color: 'red' }}>*</span> Event name: &nbsp; </label>
						<input
							type='text'
							value={input.Name}
							id='Name'
							name='Name'
							placeholder='Name'
							required
							onChange={(e) => handleChange(e)}
						/>
						{input.Name !== '' && errors.Name && <p style={{ color: 'red' }}>{errors.Name}</p>}
					</div>
					
					<div>
						<label htmlFor='Date'><span style={{ color: 'red' }}>*</span> Date: &nbsp;</label>
						<input
							type='datetime-local'
							value={input.Date}
							name='Date'
							placeholder='day / month / year'
							onChange={(e) => handleChange(e)}
						/>{' '}
						{input.Date !== '' && errors.Date && <p style={{ color: 'red' }}>{errors.Date}</p>}
					</div>
					{/* <div>
						<label htmlFor='Hour'>* Hour: &nbsp;</label>
						<input
							type='time'
							value={input.Hour}
							name='Hour'
							placeholder='Hour : minute'
							onChange={(e) => handleChange(e)}
						/>{' '}
						{errors.Hour && <p style={{ color: 'red' }}>{errors.Hour}</p>}
					</div> */}
					<div>
						<label htmlFor='City'><span style={{ color: 'red' }}>*</span> City: &nbsp;</label>
						<select value={input.City} name='City' onChange={(e) => handleChange(e)}>
							<option value='' hidden>
								Select City
							</option>
							{Cities.map((p) => {
								return (
									<option key={p} value={p}>
										{p}
									</option>
								);
							})}
						</select>
						{input.City !== '' && errors.City && <p style={{ color: 'red' }}>{errors.City}</p>}
					</div>
					<div>
						<label htmlFor='Location'><span style={{ color: 'red' }}>*</span> Exact Location: &nbsp;</label>
						<input
							type='text'
							value={input.Location}
							name='Location'
							placeholder='Exact Location'
							onChange={(e) => handleChange(e)}
						/>
						{input.Location !== '' && errors.Location && <p style={{ color: 'red' }}>{errors.Location}</p>}
					</div>
					<div>
						<label htmlFor='Category'><span style={{ color: 'red' }}>*</span> Category: &nbsp;</label>
						<select value={input.Category} name='Category' onChange={(e) => handleChange(e)}>
							<option value='' hidden>
								Select Category
							</option>
							{Categories.map((p) => {
								return (
									<option key={p} value={p}>
										{p}
									</option>
								);
							})}
						</select>
						{input.Category !== '' && errors.Category && <p style={{ color: 'red' }}>{errors.Category}</p>}
					</div>
					<div>
						<label htmlFor='img1'><span style={{ color: 'red' }}>*</span> Image 1: &nbsp; </label>
						<input
							type='text'
							value={input.img1}
							id='img1'
							name='img1'
							placeholder='img'
							onChange={(e) => handleChange(e)}
						/>
						{input.img1 !== '' && errors.img1 && <p style={{ color: 'red' }}>{errors.img1}</p>}
					</div>
					<div>
						<label htmlFor='img2'>Image 2: &nbsp; </label>
						<input
							type='text'
							value={input.img2}
							id='img2'
							name='img2'
							placeholder='img'
							onChange={(e) => handleChange(e)}
						/>
						{errors.img2 && <p style={{ color: 'red' }}>{errors.img2}</p>}
					</div>
					<div>
						<label htmlFor='img3'>Image 3: &nbsp; </label>
						<input
							type='text'
							value={input.img3}
							id='img3'
							name='img3'
							placeholder='img'
							onChange={(e) => handleChange(e)}
						/>
						{errors.img3 && <p style={{ color: 'red' }}>{errors.img3}</p>}
					</div>
					<div>
						<label htmlFor='img4'>Image 4: &nbsp; </label>
						<input
							type='text'
							value={input.img4}
							id='img4'
							name='img4'
							placeholder='img'
							onChange={(e) => handleChange(e)}
						/>
						{errors.img4 && <p style={{ color: 'red' }}>{errors.img4}</p>}
					</div>
					<div>
						<label htmlFor='Price'>Price: &nbsp;</label>
						<input
							type='number'
							value={input.Price}
							id='Price'
							name='Price'
							placeholder='Price'
							required
							onChange={(e) => handleChange(e)}
						/>
					</div>
					{errors.Price && <p style={{ color: 'red' }}>{errors.Price}</p>}

					<div>
						<label htmlFor='Quantity'>Quantity: &nbsp;</label>
						<input
							type='number'
							value={input.Quantity}
							name='Quantity'
							placeholder='Quantity'
							onChange={(e) => handleChange(e)}
						/>
					</div>
					{errors.Quantity && <p style={{ color: 'red' }}>{errors.Quantity}</p>}

					<div>
						<label htmlFor='Restrictions'>Restrictions: &nbsp;</label>
						<textarea
							type='text'
							value={input.Restrictions}
							name='Restrictions'
							placeholder='Separate Restrictions using / (example: 1º Res. / 2º Res. / etc...)'
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div>
						<label htmlFor='Detail'>Detail: &nbsp;</label>
						<textarea
							type='text'
							value={input.Detail}
							name='Detail'
							placeholder='Insert Detail'
							onChange={(e) => handleChange(e)}
						/>
					</div>

					<div>
						<p style={{ color: 'red' }}>* Required fields</p>
					</div>

					<div className={styles.divbutton}>
						<button
							onClick={(e) => handleSubmit(e)}
							className={styles.Button2}
							disabled={
								Object.keys(errors).length ? (errors.check === 'approved' ? false : true) : true
							}>
							Create
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddEvent;
