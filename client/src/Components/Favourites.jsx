import { React } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavourites } from '../Redux/Actions/removeFromFav';
import styles from '../Styles/Favourites.module.css';
import updateFavourite from '../Redux/Actions/updateFavourite';

export default function Favourites() {
	const dispatch = useDispatch();
	let user = useSelector((state) => state.userInfo);
	console.log('🐲🐲🐲 / file: Favourites.jsx / line 11 / user', user.Favourites);
	const fav = user ? user.Favourites : [];
	console.log('🐲🐲🐲 / file: Favourites.jsx / line 13 / fav', fav);

	function handleDeleteFav(index) {
		//console.log(index);
		dispatch(removeFromFavourites(index));
		dispatch(updateFavourite(user.ID));
	}

	return (
		<div className={styles.container}>
			{fav?.length ? (
				fav.map((item) => (
					<div key={item.ID} className={styles.cards}>
						<Link to={`/details/id/${item.ID}`}>
							<div className={styles.leftcolumn}>
								<img src={item.Image[0]} alt='not img' />
							</div>
						</Link>
						<div className={styles.rightcolumn}>
							<h6>{item.Name}</h6>
							<p>${item.Price}</p>
							<p>{item.Date}</p>
							<div className={styles.containerButton}>
								<button className={styles.buttonX} onClick={() => handleDeleteFav(item.ID)}>
									x
								</button>
							</div>
						</div>
					</div>
				))
			) : (
				<div>
					<h2 className={styles.text}>You have no events selected as favorites!</h2>
				</div>
			)}
		</div>
	);
}
