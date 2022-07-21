import React from 'react'
import {Link} from 'react-router-dom'

export default function EventCard({id, image, name, day, hour, price,quantity,city,location}) {
    return(
        <Link to={`/details/id/${id}`}>
        <div>
            <img src={image} alt='img eventCard'/>
            <h4>{name}</h4>
            <p>Date: {day} / {hour} </p>
            <p>Cost: {price}$</p>
            <p>Tickets Available: {quantity}</p>
            <p>City: {city}</p>
            <p>Place: {location}</p>
        </div>
        </Link>
    )
}