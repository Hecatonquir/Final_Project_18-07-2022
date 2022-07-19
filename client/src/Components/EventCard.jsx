import React from 'react'
import {Link} from 'react-router-dom'

export default function EventCard({id, image, name, date, price}) {
    return(
        <Link to={`/xxxxx/${id}`}> {/*Pendiente revision de ruta*/}
        <div>
            <img src={image} alt='img eventCard'/>
            <h4>{name}</h4>
            <p>{date}</p>
            <p>{price}</p>
        </div>
        </Link>
    )
}