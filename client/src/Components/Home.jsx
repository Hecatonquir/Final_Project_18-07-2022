import {React, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getEvents} from '../Redux/Actions/getEvents.js'
import Card from './Card.js'
import NavBar from './NavBar.js'
import Search from './Search.js'

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
                            <Card/>
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