import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavourites } from '../Redux/Actions/removeFromFav';
import styles from '../Styles/Favourites.module.css';
import updateFavourite from '../Redux/Actions/updateFavourite';
import { getUserByID2 } from '../Redux/Actions/getUserByID2';

export default function Favourites({ tokenDecoded }) {
	const dispatch = useDispatch();
	const fav = useSelector((state) => state.favourites);

	useEffect(() => {
		dispatch(getUserByID2(tokenDecoded.id));
	}, []);

	function handleDeleteFav(index) {
		console.log(index);
		dispatch(removeFromFavourites(index));
		dispatch(updateFavourite(tokenDecoded.id));
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
							<h6 className={styles.data}>{item.Name}</h6>
							<p className={styles.data}>${item.Price}</p>
							<p className={styles.data}>{item.Date}</p>
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
