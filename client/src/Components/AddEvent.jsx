import { React, useEffect, /*useMemo, useRef, useCallback,  useEffect ,*/ useState } from 'react';
/* import { useDispatch } from 'react-redux'; */
import { useNavigate } from 'react-router-dom';
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
	useMediaQuery,
} from '@chakra-ui/react';
import PlacesAutocomplete, {
	geocodeByAddress,
	geocodeByPlaceId,
	getLatLng,
} from 'react-places-autocomplete';
import { decodeToken } from 'react-jwt';
// import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
// import { useDispatch, useSelector } from 'react-redux';
// import { SET_COORDS } from '../Redux/ActionTypes/actiontypes';

// const center = {
// 	lat: -36.5,
// 	lng: -64.09,
//   }

//   function DraggableMarker() {
// 	const [markerCoords, setMC] = useState({})
// 	const dispatch = useDispatch()
// 	// const [draggable, setDraggable] = useState(false)
// 	const [position, setPosition] = useState(center)
// 	const markerRef = useRef(null)
// 	useEffect(()=> {dispatch({type: SET_COORDS, payload: markerCoords})},[markerCoords])
// 	const eventHandlers = useMemo(
// 	  () => ({
// 		dragend() {
// 		  const marker = markerRef.current
// 		  let markerLatLng = marker.getLatLng()
// 		  if (marker != null) {
// 			setPosition(markerLatLng)
// 			console.log(markerLatLng)
// 			setMC([markerLatLng.lat, markerLatLng.lng])
// 		  }
// 		},
// 	  }),
// 	  [],
// 	)
// 	// const toggleDraggable = useCallback(() => {
// 	//   setDraggable((d) => !d)
// 	// }, [])

// 	return (
// 	  <Marker
// 		draggable={true}
// 		eventHandlers={eventHandlers}
// 		position={position}
// 		ref={markerRef}>
// 		<Popup minWidth={90}>
// 		  <span /*onClick={toggleDraggable}*/>
// 			{/* {draggable
// 			  ? 'Marker is draggable'
// 			  : 'Click here to make marker draggable'} */}
// 			  Drag the marker to the event's location
// 		  </span>
// 		</Popup>
// 	  </Marker>
// 	)
//   }

function AddEvent() {
	let token = document.cookie.split(';')[0];
	let token1 = token.split('=')[1];
	let tokenDecoded = decodeToken(token1);

	/* 	const dispatch = useDispatch();
	const history = useNavigate(); */
	let navigate = useNavigate();
	const [errors, setErrors] = useState({});
	// const {coords} = useSelector(s=> s)
	const Cities = [
		'Buenos Aires',
		'Catamarca',
		'Chaco',
		'Chubut',
		'Córdoba',
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
		'Dance',
		'Cinema',
		'Theatre',
		'Musical',
		'Nightlife',
		'Museums',
		'Literary Arts',
		'Public Art',
		'Music',
		'Festivals',
		'Circus',
		'Galleries',
		'Concert',
		'Sport',
		'Carnival',
		'Open Air',
		'Tours',
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
		Coords: [],
	});

	//Variables para obtener coordenadas
	const [address, setAddress] = useState('');

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
		console.log(input);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (errors.check !== 'approved') {
			swal('Not created', '', 'error');
		} else {
			postEvent(
				{
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
					Coords: input.Coords,
				},
				tokenDecoded.email
			);
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
				Category: '',
				AgeRestriction: '',
				Coords: [],
			});
		}
	}

	useEffect(() => {
		if (tokenDecoded && tokenDecoded.role === 'User') {
			navigate('/');
		}
		if (!tokenDecoded) {
			navigate('/');
		}
	});

	//Función para seleccionar la locación.
	const handleSelectCoords = async (value) => {
		const results = await geocodeByAddress(value);
		const coordinates = await getLatLng(results[0]);
		setAddress(value);
		setInput({
			...input,
			Coords: [
				coordinates.lat ? coordinates.lat : -34.600441,
				coordinates.lng ? coordinates.lng : -58.383151,
			],
			Location: value.split(',', 2).toString(),
		});
		setErrors(
			validate({
				...input,
				Location: value.split(',', 2).toString(),
			})
		);
	};

	//Responsive
	const [smallScreen] = useMediaQuery('(min-width: 430px)');

	return (
		<Box bg='#EEEEEE' minHeight='100vh'>
			<Nav />
			<Flex marginTop='5vh' justifyContent='center'>
				<Box
					maxW='100%'
					bg='#b1b7b76a'
					border='1px solid #88cfd938'
					p={2}
					boxShadow=' 5px 5px 10px #2c2b2b, -10px -10px 20px #5c5a5a;'
					borderRadius='20px'>
					<Heading
						as='h1'
						color='#222831'
						textAlign='center'
						margin={4}
						fontSize={!smallScreen ? '1.5em' : '2em'}>
						Add Event
					</Heading>
					<form className={styles.form}>
						<FormControl marginBottom={4}>
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								<span style={{ color: 'red' }}>*</span>Event name
							</FormLabel>
							<Input
								fontSize={!smallScreen ? '.8em' : '1em'}
								type='text'
								value={input.Name}
								id='Name'
								name='Name'
								placeholder='(Max 25 characters)'
								_placeholder={{ color: '#393e46b6' }}
								required
								variant='flushed'
								onChange={(e) => handleChange(e)}
							/>
							{input.Name !== '' && errors.Name && (
								<Text color='red' fontSize={!smallScreen ? '.8em' : '1em'}>
									{errors.Name}
								</Text>
							)}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								<span style={{ color: 'red' }}>*</span>Province
							</FormLabel>
							<Select
								fontSize={!smallScreen ? '.8em' : '1em'}
								value={input.City}
								name='City'
								variant='flushed'
								color='#393e46b6'
								onChange={(e) => handleChange(e)}>
								<option value='' hidden>
									(Select province...)
								</option>
								{Cities.map((p) => {
									return (
										<option key={p} value={p}>
											{p}
										</option>
									);
								})}
							</Select>
							{input.City !== '' && errors.City && (
								<Text color='red' fontSize={!smallScreen ? '.8em' : '1em'}>
									{errors.City}
								</Text>
							)}
						</FormControl>

						{/* <FormControl marginBottom={4}>
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								<span style={{ color: 'red' }}>*</span>Exact Location
							</FormLabel>
							<Input
								fontSize={!smallScreen ? '.8em' : '1em'}
								type='text'
								value={input.Location}
								name='Location'
								placeholder='(Max 25 characters)'
								_placeholder={{ color: '#393e46b6' }}
								variant='flushed'
								onChange={(e) => handleChange(e)}
							/>
							{input.Location !== '' && errors.Location && (
								<Text color='red' fontSize={!smallScreen ? '.8em' : '1em'}>
									{errors.Location}
								</Text>
							)}
						</FormControl> */}

						{/* <MapContainer center={center} zoom={3} scrollWheelZoom={false}>
    						<TileLayer
    						  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    						  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    						/>
    						<DraggableMarker/>
  						</MapContainer>, */}
						<FormControl marginBottom={4}>
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								<span style={{ color: 'red' }}>*</span>Exact Location
							</FormLabel>
							<PlacesAutocomplete
								value={address}
								onChange={setAddress}
								onSelect={handleSelectCoords}>
								{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
									<div key={suggestions.description}>
										<Input
											value={input.Location}
											id='Location'
											name='Location'
											bg='white'
											{...getInputProps({
												placeholder: 'Search Location...',
												className: 'location-search-input',
											})}
										/>
										<div className='autocomplete-dropdown-container'>
											{loading && <div>Loading...</div>}
											{suggestions.map((suggestion) => {
												const className = suggestion.active
													? 'suggestion-item--active'
													: 'suggestion-item';
												// inline style for demonstration purpose
												const style = suggestion.active
													? { backgroundColor: '#fafafa', cursor: 'pointer' }
													: { backgroundColor: '#ffffff', cursor: 'pointer' };
												return (
													<div
														{...getSuggestionItemProps(suggestion, {
															className,
															style,
														})}>
														<span>{suggestion.description}</span>
													</div>
												);
											})}
										</div>
									</div>
								)}
							</PlacesAutocomplete>
							{input.Location !== '' && errors.Location && (
								<Text color='red' fontSize={!smallScreen ? '.8em' : '1em'}>
									{errors.Location}
								</Text>
							)}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								<span style={{ color: 'red' }}>*</span>Detail
							</FormLabel>
							<Textarea
								fontSize={!smallScreen ? '.8em' : '1em'}
								type='text'
								value={input.Detail}
								name='Detail'
								placeholder='(Insert Detail)'
								_placeholder={{ color: '#393e46b6' }}
								onChange={(e) => handleChange(e)}
							/>
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								<span style={{ color: 'red' }}>*</span>Date and Time
							</FormLabel>
							<Input
								fontSize={!smallScreen ? '.8em' : '1em'}
								type='datetime-local'
								min={today}
								value={input.date}
								name='date'
								color='#393e46b6'
								placeholder='day / month / year'
								variant='flushed'
								onChange={(e) => handleChange(e)}
							/>{' '}
							{/* {console.log(input.date)}  */}
							{/* input.date !== '' && */ errors.date && (
								<Text color='red' fontSize={!smallScreen ? '.8em' : '1em'}>
									{errors.date}
								</Text>
							)}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								<span style={{ color: 'red' }}>*</span>Category
							</FormLabel>
							<Select
								fontSize={!smallScreen ? '.8em' : '1em'}
								value={input.Category}
								name='Category'
								variant='flushed'
								color='#393e46b6'
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
								<Text color='red' fontSize={!smallScreen ? '.8em' : '1em'}>
									{errors.Category}
								</Text>
							)}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								<span style={{ color: 'red' }}>*</span>Image 1
							</FormLabel>
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
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								Image 2
							</FormLabel>
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
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								Image 3
							</FormLabel>
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
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								Image 4
							</FormLabel>
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
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								Carrousel image (increased cost)
							</FormLabel>
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
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								Quantity
							</FormLabel>
							<Input
								fontSize={!smallScreen ? '.8em' : '1em'}
								type='number'
								value={input.Quantity}
								name='Quantity'
								min='0'
								placeholder='(Insert Number) Represents the number of tickets you can sell'
								_placeholder={{ color: '#393e46b6' }}
								variant='flushed'
								onChange={(e) => handleChange(e)}
							/>
							{errors.Quantity && (
								<Text color='red' fontSize={!smallScreen ? '.8em' : '1em'}>
									{errors.Quantity}
								</Text>
							)}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								Price
							</FormLabel>
							<Input
								fontSize={!smallScreen ? '.8em' : '1em'}
								type='number'
								value={input.Price}
								id='Price'
								name='Price'
								min='0'
								placeholder='$ (ARS)'
								_placeholder={{ color: '#393e46b6' }}
								required
								variant='flushed'
								onChange={(e) => handleChange(e)}
							/>
							{errors.Price && (
								<Text color='red' fontSize={!smallScreen ? '.8em' : '1em'}>
									{errors.Price}
								</Text>
							)}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								Age Restriction
							</FormLabel>
							<InputGroup>
								<InputLeftAddon children='+' />
								<Input
									fontSize={!smallScreen ? '.8em' : '1em'}
									type='number'
									value={input.AgeRestriction}
									name='AgeRestriction'
									placeholder='(Insert Number)'
									_placeholder={{ color: '#393e46b6' }}
									variant='flushed'
									marginLeft={1}
									onChange={(e) => handleChange(e)}
								/>
							</InputGroup>
							{errors.AgeRestriction && (
								<Text color='red' fontSize={!smallScreen ? '.8em' : '1em'}>
									{errors.AgeRestriction}
								</Text>
							)}
						</FormControl>

						<FormControl marginBottom={4}>
							<FormLabel color='#222831' fontSize={!smallScreen ? '.8em' : '1em'}>
								Restrictions
							</FormLabel>
							<Textarea
								fontSize={!smallScreen ? '.8em' : '1em'}
								type='text'
								value={input.Restrictions}
								name='Restrictions'
								placeholder='(Separate each restriction using "/") '
								_placeholder={{ color: '#393e46b6' }}
								onChange={(e) => handleChange(e)}
							/>
						</FormControl>

						<Box marginBottom={4}>
							<Text color='red' fontSize={!smallScreen ? '.8em' : '1em'}>
								*Required fields
							</Text>
						</Box>

						<Box textAlign='center' marginBottom={4}>
							<Button
								bg='#FD7014'
								color='#EEEEEE'
								_hover={{ bg: '#EEEEEE', color: 'black' }}
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
