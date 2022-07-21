import {React, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import getEvents from '../Redux/Actions/getEvents.js'
import ButtonFilter from './ButtonFilter.jsx'
import EventCard from './EventCard.jsx'
import NavBar from './NavBar.jsx'
import Search from './Search.jsx'
import EventCarousel from './Carousel.jsx'
import Loader from './Loader.jsx'
import CalendarEvents from './Calendar.jsx'
import styles from '../Styles/Home.module.css'

export default  function Home() {
    const dispatch = useDispatch()
    const events = useSelector((state) => state.allEvents)
    useEffect( () => {
         dispatch(getEvents())
    }, [])

    return(
        <div>
            
               <NavBar/>
            <EventCarousel/>
            <Search/>
            <ButtonFilter />
            <CalendarEvents></CalendarEvents>
            <div className={styles.cards}>
            {events.length ? events.map( event => (
                            <div key={event.ID} className={styles.card}>
                            <EventCard
                            id={event.ID}
                            name={event.Name}
                            image={event.Image}
                            price={event.Price}
                            quantity={event.Quantity}
                            city={event.City}
                            location={event.Location}
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