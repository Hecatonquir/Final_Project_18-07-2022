import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUserDetails } from "../Redux/Actions/getUserDetails"
import { useParams, Link } from "react-router-dom"
export default function PartnerPanel() {

    let dispatch = useDispatch()
    let user = useSelector(state => state.userDetails)
    let id = useParams()


    useEffect(() => {
        dispatch(getUserDetails(id))
        
    },[])



    return (
        <div>

        {user && 
        <div>
            <h5>Control Panel</h5>
            <h1>Welcome {user.Name}</h1>
            <label>Username:</label>
            <h1>{user.Username}</h1>
            <label>Email:</label>
            <h1>{user.Email}</h1>
            <label>City</label>
            <h1>{user.City}</h1>
            <label>Location:</label>
            <h1>{user.Location}</h1>
        </div>}

        {user && user.events && user.events.filter(el => !el.isErased)
        .map(el =>  (
            <div>
                <Link to={`/details/id/${el.ID}`}>
                <label>Name</label>
                <h1>{el.Name}</h1>
                <img src={el.Image} alt="No Img"/>
                <h1>Price</h1>
                <h1>{el.Price}</h1>
                <label>Quantity</label>
                <h1>{el.Quantity}</h1>
                <label>Earnings:</label>
                <h1>{(el.InitialQtty - el.Quantity) * el.Price}</h1>
                <label>Event Status</label>
                <h1>{el.isLive ? "Active": "Pending for approval"}</h1>
                <h1>{el.isErased? "This event is closed/Ban": "ON"}</h1>
                </Link>


                </div>


        ))}

        {user && 
        <div>Note, you will receive your earnings for each event 48 hours after event end.</div>}

        </div>
    )




}