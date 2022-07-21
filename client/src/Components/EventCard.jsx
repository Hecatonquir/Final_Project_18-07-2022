import React from 'react'
import {Link} from 'react-router-dom'


export default function EventCard({id, image, name, price,quantity,city,location}) {

    return(   
        <div>
            <Link to={`/details/id/${id}`}>
            <img src={image} alt='img eventCard'/>
            <h4>{name}</h4>
            </Link>
            <p>Price: {price}$</p>
            <p>Tickets Available: {quantity}</p>
            <p>City: {city}</p>
            <p>Place: {location}</p>
        </div>
        
    )
}