import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_EVENTS, SHOW_EVENTS_USER } from '../Redux/ActionTypes/actiontypes';
import styles from '../Styles/ButtonFilter.module.css';
import { Box, Button, Flex, Select, Stack } from '@chakra-ui/react';
import swal from 'sweetalert';
import Search from './Search';

function ButtonFilter({ setSearch, search }) {
	let [controlFilter, setReference] = useState({
		city: '',
		category: '',
	});

	useEffect(() => {
		newFilter();
	}, [controlFilter]);

	const backUp = useSelector((state) => state.eventsBackUp);
	const allEvents = useSelector((state) => state.allEvents);
	const dispatch = useDispatch();

	let cities = Array.from(new Set(backUp.slice().map((el) => el.City)));
	let categories = Array.from(new Set(backUp.slice().map((el) => el.Category)));

	function filterItems(el) {
		const cityFound = backUp.filter((e) => e.City === el);
		const categoryFound = backUp.filter((e) => e.Category === el);

		if (cityFound[0]) {
			setReference({ ...controlFilter, city: el });
			controlFilter.city = el;
		} else if (categoryFound[0]) {
			setReference({ ...controlFilter, category: el });
		}
	}

	function newFilter() {
		if (controlFilter.city !== '' && controlFilter.category !== '') {
			const bothFilter = backUp.filter(
				(e) => e.City === controlFilter.city && e.Category === controlFilter.category
			);
			if (!bothFilter[0]) {
				document.getElementById('city').value = 'City';
				document.getElementById('cat').value = 'Categories';
				setReference(
					(controlFilter = {
						city: '',
						category: '',
					})
				);
				dispatch({ type: SHOW_EVENTS_USER, payload: backUp });
				return swal('No match for this combination', { icon: 'warning' });
			}
			return dispatch({ type: SHOW_EVENTS_USER, payload: bothFilter });
		} else if (controlFilter.city !== '' && controlFilter.category === '') {
			const cityFilter = backUp.filter((e) => e.City === controlFilter.city);
			return dispatch({ type: SHOW_EVENTS_USER, payload: cityFilter });
		} else if (controlFilter.city === '' && controlFilter.category !== '') {
			const categoryFilter = backUp.filter((e) => e.Category === controlFilter.category);
			return dispatch({ type: SHOW_EVENTS_USER, payload: categoryFilter });
		}
	}

	let handleSelect = (e) => {
		return filterItems(e.target.value);
	};

	return (
		<>
			<Stack spacing={10} marginTop={6} marginBottom={6}>
				<Flex justifyContent='space-around' width='100%'>
					<div className={styles.search}>
						<Search search={search} setSearch={setSearch} />
					</div>
					<Select
						variant='flushed'
						marginLeft='5rem'
						width='30%'
						onChange={(e) => handleSelect(e)}
						color='gray'
						id='city'>
						<option value='City' hidden>
							Filter By City
						</option>
						{cities.map((el, i) => (
							<option key={i} onClick={() => filterItems(el)}>
								{el}
							</option>
						))}
					</Select>

					<Select
						variant='flushed'
						marginLeft='5rem'
						marginRight='5rem'
						width='30%'
						onChange={(e) => handleSelect(e)}
						color='gray'
						id='cat'>
						<option value='Categories' hidden>
							Filter By Categories
						</option>
						{categories.map((el, i) => (
							<option key={i} onClick={() => filterItems(el)}>
								{el}
							</option>
						))}
					</Select>

					<Box>
						<Button
							className={styles.Button2}
							onClick={() => {
								document.getElementById('city').value = 'City';
								document.getElementById('cat').value = 'Categories';
								return (
									setReference(
										(controlFilter = {
											city: '',
											category: '',
										})
									),
									setSearch(''),
									dispatch({ type: GET_EVENTS, payload: backUp }),
									dispatch({ type: SHOW_EVENTS_USER, payload: backUp.slice(0, 15) })
								);
							}}
							bg='#f4a69a'>
							Clear Filters
						</Button>
					</Box>
				</Flex>
			</Stack>
		</>
	);
}

export default ButtonFilter;
