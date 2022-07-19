import {React, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getEvents} from '../Redux/Actions/getEvents.js'
import EventCard from './EventCard.jsx'
import NavBar from './NavBar.jsx'
import Search from './Search.jsx'

export default function Home() {
    const dispatch = useDispatch()
    const events = useSelector((state) => state.allEvents)
    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])

    return(
        <div>
            <NavBar/>
            <Search/>
            <div>
            {events.length ? events.map( event => (
                            <div key={event.id} >
                            <EventCard
                            id={event.id}
                            name={event.name}
                            image={event.image}
                            date={event.date}
                            price={event.price}
                            />
                            </div>
            )) 
            : <div>
                ...Cargando
            </div>
            }
            </div>
        </div>
    )
}