import { React, /* useEffect ,*/ useState } from 'react';
/* import { useDispatch } from 'react-redux'; */
import /*Link  , useNavigate */ 'react-router-dom';
import { postEvent } from '../Redux/Actions/postEvent';
import styles from '../Styles/AddEvent.module.css';
import validate from './Validations';
import { Widget } from '@uploadcare/react-widget';
import Nav from './Nav';
import swal from 'sweetalert';
import {
	Box,
	Heading,
	Button,
	FormControl,
	FormLabel,
	Textarea,
	Input,
	Select,
	Text,
	Flex,
	InputGroup,
	InputLeftAddon,
} from '@chakra-ui/react';

function AddEvent() {
	/* 	const dispatch = useDispatch();
	const history = useNavigate(); */
	const [errors, setErrors] = useState({});
	const Cities = [
		'Buenos Aires',
		'Buenos Aires Capital',
		'Catamarca',
		'Chaco',
		'Chubut',
		'Cordoba',
		'Corrientes',
		'Entre Rios',
		'Formosa',
		'Jujuy',
		'La Pampa',
		'La Rioja',
		'Mendoza',
		'Misiones',
		'Neuquen',
		'Rio Negro',
		'Salta',
		'San Juan',
		'San Luis',
		'Santa Cruz',
		'Santa Fe',
		'Santiago del Estero',
		'Tierra del Fuego',
		'Tucuman',
	];
	const Categories = [
		'Boliches',
		'Recital',
		'Musical',
		'Teatro',
		'Festival',
		'Concierto',
		'Deportes',
	];
	let today = new Date().toISOString().slice(0, 16); //------- Example of today 2022-07-24T14:30

	let [input, setInput] = useState({
		Name: '',
		img1: '',
		img2: '',
		img3: '',
		img4: '',
		carrousel: '',
		Price: '',
		Quantity: '',
		Rating: '',
		Restrictions: [],
		City: '',
		Location: '',
		date: '',
		Hour: '',
		Detail: '',
		Category: '',
		AgeRestriction: '',
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
			swal('Not created', '', 'error');
		} else {
			postEvent({
				Name: input.Name,
				Image: [input.img1, input.img2, input.img3, input.img4],
				Carrousel: input.carrousel,
				Price: Number(input.Price),
				Quantity: Number(input.Quantity),
				InitialQtty: Number(input.Quantity),
				Rating: Number(input.Rating),
				Category: input.Category,
				Restrictions: input.Restrictions.length ? input.Restrictions.split('/') : [],
				City: input.City,
				Location: input.Location,
				Date: input.date,
				Hour: input.Hour,
				Detail: input.Detail,
				AgeRestriction: Number(input.AgeRestriction),
			});
			setInput({
				Name: '',
				img1: '',
				img2: '',
				img3: '',
				img4: '',
				carrousel: '',
				Price: '',
				Quantity: '',
				Rating: '',
				Restrictions: [],
				City: '',
				Location: '',
				date: '',
				Hour: '',
				Detail: '',
				AgeRestriction: '',
			});
		}
	}

	return (
		<Box bgGradient='linear(to-r, #1c2333, #371a1e)' minHeight='100vh'>
			<Nav />
			<Flex marginTop='5vh' justifyContent='center'>
				<Box
					maxW='100%'
					bg='#b1b7b76a'
					border='1px solid #88cfd938'
					p={2}
					boxShadow=' 5px 5px 10px #2c2b2b, -10px -10px 20px #5c5a5a;'
					borderRadius='20px'>
					<Heading as='h1' color='white' textAlign='center' margin={4}>
						Add Event
					</Heading>
					<form style={{ width: '40em' }}>
						<FormControl marginBottom={4}>
							<FormLabel color='white'>*Event name</FormLabel>
							<Input
								type='text'
								value={input.Name}
								id='Name'
								name='Name'
								placeholder='(Max 25 characters)'
								_placeholder={{ color: '#202531' }}
								required
								variant='flushed'
								onChange={(e) => handleChange(e)}
							/>
							{input.Name !== '' && errors.Name && <Text color='red'>{errors.Name}</Text>}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>*City</FormLabel>
							<Select
								value={input.City}
								name='City'
								variant='flushed'
								onChange={(e) => handleChange(e)}>
								<option value='' hidden>
									(Select City)
								</option>
								{Cities.map((p) => {
									return (
										<option key={p} value={p}>
											{p}
										</option>
									);
								})}
							</Select>
							{input.City !== '' && errors.City && <Text color='red'>{errors.City}</Text>}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>*Exact Location</FormLabel>
							<Input
								type='text'
								value={input.Location}
								name='Location'
								placeholder='(Max 25 characters)'
								_placeholder={{ color: '#202531' }}
								variant='flushed'
								onChange={(e) => handleChange(e)}
							/>
							{input.Location !== '' && errors.Location && (
								<Text color='red'>{errors.Location}</Text>
							)}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>*Detail</FormLabel>
							<Textarea
								type='text'
								value={input.Detail}
								name='Detail'
								placeholder='(Insert Detail)'
								_placeholder={{ color: '#202531' }}
								className={styles.input}
								onChange={(e) => handleChange(e)}
							/>
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>*Date</FormLabel>
							<Input
								type='datetime-local'
								min={today}
								value={input.date}
								name='date'
								placeholder='day / month / year'
								variant='flushed'
								onChange={(e) => handleChange(e)}
							/>{' '}
							{input.date !== '' && errors.date && <Text color='red'>{errors.date}</Text>}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>*Category</FormLabel>
							<Select
								value={input.Category}
								name='Category'
								variant='flushed'
								onChange={(e) => handleChange(e)}>
								<option value='' hidden>
									(Select Category)
								</option>
								{Categories.map((p) => {
									return (
										<option key={p} value={p}>
											{p}
										</option>
									);
								})}
							</Select>
							{input.Category !== '' && errors.Category && (
								<Text color='red'>{errors.Category}</Text>
							)}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>*Image 1</FormLabel>
							<Widget
								publicKey='4a7fa09f2188af9b76a3'
								type='file'
								value={input.img1}
								id='img1'
								name='img1'
								variant='flushed'
								data-tabs='file url facebook gdrive gphotos'
								required
								onChange={(e) => {
									setInput({
										...input,
										img1: e.originalUrl,
									});
									setErrors(
										validate({
											...input,
											img1: e.originalUrl,
										})
									);
								}}
							/>
							{input.img1 !== '' && errors.img1 && <Text color='red'>{errors.img1}</Text>}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>Image 2</FormLabel>
							<Widget
								publicKey='4a7fa09f2188af9b76a3'
								type='text'
								value={input.img2}
								id='img2'
								variant='flushed'
								onChange={(e) => {
									setInput({
										...input,
										img2: e.originalUrl,
									});
								}}
							/>
							{errors.img2 && <Text color='red'>{errors.img2}</Text>}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>Image 3</FormLabel>
							<Widget
								publicKey='4a7fa09f2188af9b76a3'
								type='text'
								value={input.img3}
								id='img3'
								variant='flushed'
								onChange={(e) => {
									setInput({
										...input,
										img3: e.originalUrl,
									});
								}}
							/>
							{errors.img3 && <Text color='red'>{errors.img3}</Text>}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>Image 4</FormLabel>
							<Widget
								publicKey='4a7fa09f2188af9b76a3'
								value={input.img4}
								id='file'
								variant='flushed'
								onChange={(e) => {
									setInput({
										...input,
										img4: e.originalUrl,
									});
								}}
							/>
							{errors.img4 && <Text color='red'>{errors.img4}</Text>}
						</FormControl>
						<FormControl marginBottom={4}>
							<FormLabel color='white'>Carrousel image (increased cost)</FormLabel>
							<Widget
								publicKey='4a7fa09f2188af9b76a3'
								value={input.carrousel}
								id='carrousel'
								variant='flushed'
								onChange={(e) => {
									setInput({
										...input,
										carrousel: e.originalUrl,
									});
								}}
							/>
							{errors.carrousel && <Text color='red'>{errors.carrousel}</Text>}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>Price</FormLabel>
							<Input
								type='number'
								value={input.Price}
								id='Price'
								name='Price'
								min='0'
								placeholder='$ (Insert Number)'
								_placeholder={{ color: '#202531' }}
								required
								variant='flushed'
								onChange={(e) => handleChange(e)}
							/>
							{errors.Price && <Text color='red'>{errors.Price}</Text>}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>Quantity</FormLabel>
							<Input
								type='number'
								value={input.Quantity}
								name='Quantity'
								min='0'
								placeholder='(Insert Number)'
								_placeholder={{ color: '#202531' }}
								variant='flushed'
								onChange={(e) => handleChange(e)}
							/>
							{errors.Quantity && <Text color='red'>{errors.Quantity}</Text>}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>Age Restriction</FormLabel>
							<InputGroup>
								<InputLeftAddon children='+' />
								<Input
									type='number'
									value={input.AgeRestriction}
									name='AgeRestriction'
									placeholder='(Insert Number)'
									_placeholder={{ color: '#202531' }}
									variant='flushed'
									marginLeft={1}
									onChange={(e) => handleChange(e)}
								/>
							</InputGroup>
							{errors.AgeRestriction && <Text color='red'>{errors.AgeRestriction}</Text>}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='white'>Restrictions</FormLabel>
							<Textarea
								type='text'
								value={input.Restrictions}
								name='Restrictions'
								placeholder='(Separate each restriction using "/") '
								_placeholder={{ color: '#202531' }}
								onChange={(e) => handleChange(e)}
							/>
						</FormControl>
						<br />
						<Box marginBottom={4}>
							<Text color='red'>*Required fields</Text>
						</Box>
						<Box textAlign='center' marginBottom={4}>
							<Button
								bg='#f4a69a'
								onClick={(e) => handleSubmit(e)}
								disabled={
									Object.keys(errors).length ? (errors.check === 'approved' ? false : true) : true
								}>
								Create
							</Button>
						</Box>
					</form>
				</Box>
			</Flex>
			<br />
		</Box>
	);
}

export default AddEvent;
