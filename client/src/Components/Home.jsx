import {React, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import getEvents from '../Redux/Actions/getEvents.js'
import ButtonFilter from './ButtonFilter.jsx'
import EventCard from './EventCard.jsx'
import NavBar from './NavBar.jsx'
import Search from './Search.jsx'
import EventCarousel from './Carousel.jsx'
import Loader from './Loader.jsx'

export default  function Home() {
    const dispatch = useDispatch()
    const events = useSelector((state) => state.allEvents)
    useEffect( () => {
         getEvents()
    }, [])

    return(
        <div>
            <NavBar/>
            <Search/>
            <EventCarousel/>
            <ButtonFilter />
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
                <Loader/>
            </div>
            }
            </div>
        </div>
    )
}