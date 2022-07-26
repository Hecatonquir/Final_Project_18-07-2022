import {React} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { removeFromFavourites } from '../Redux/Actions/removeFromFavourites'


export default function Favourites() {
    const dispatch = useDispatch()
    const fav = useSelector((state) => state.favourites)


    function handleDeleteFav(index) {
        console.log(index)
         dispatch(removeFromFavourites(index))
    }
    
    return (
        <div>
            {
                    fav.length && fav.map( (item) => (
                        <div key={item.ID}>
                            <h6>{item.Name}</h6>
                            <p>${item.Price}</p>
                            <button onClick={() => handleDeleteFav(item.ID)}>X</button>
                        </div>
                    ))
                   
                    }
        </div>
    )
    }