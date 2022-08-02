import React from "react"
import { useSelector, useDispatch } from "react-redux"
import ticketDone from "../Redux/Actions/markTicketAsDone"
export default function UserTickets() {



let usersT = useSelector(state => state.usersBackUp)
let adminTickets = usersT.find(el => el.Role === "Admin")
let dispatch = useDispatch()


return (
    <div>

        <h5>Tickets from Users</h5>
        {adminTickets && adminTickets.supports.map(el =>(
            <div>
                <h1>{el.problemType}</h1>
                <h1>{el.reason}</h1>
                <h1>{el.emailCustomer}</h1>
                <button onClick={() => ticketDone(dispatch,el.supportID, el.done? false: true)}>{el.done? "Mark as Pending":"Mark as Done"}</button>
            </div>
        ))}
    </div>
)


}