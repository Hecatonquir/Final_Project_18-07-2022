import React,{useEffect, useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {decodeToken} from "react-jwt"
import PageNotFound from './Page404'
import getUsers from '../Redux/Actions/getUsers'
import { useDispatch, useSelector } from 'react-redux'
import el from 'date-fns/esm/locale/el/index.js'


 function AdminPanel() {

let dispatch = useDispatch()
let navigate = useNavigate()
const [admin, setAdmin] = useState(false)
let [userADM, setUser] = useState("tuemail@gmail.com")
const usersBD = useSelector(state => state.allUsers)


useEffect(() => {
    

    axios("http://localhost:3001/user/admin", {withCredentials: true})
    .then(response => setAdmin(true))
    .then(response => dispatch(getUsers()))
    .catch(error => console.log("404 Not Found"))

    
    


  return () => {
  }
}, [])

    
   return (
    <div>
       
        {!admin && <PageNotFound></PageNotFound>}
        {usersBD[0] && admin && usersBD.filter(el => el.Email.includes(userADM)).slice(0,3).map(el,i => {
            <div key={i}>
                <span>Name: {el.Name},  Email: {el.Email}</span>

            </div>
        })}
    </div>
   )
   



  
  

}

export default AdminPanel