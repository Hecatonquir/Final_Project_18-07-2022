import React,{ useState, useEffect } from "react"; 
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_USER_DETAILS } from "../Redux/ActionTypes/actiontypes";
import { getUserDetails } from "../Redux/Actions/getUserDetails";
import { Placeholder } from "react-bootstrap";
import { Box, Button, Text, Heading, Flex, Image } from "@chakra-ui/react";
import styles from '../Styles/UserDetails.module.css'
import ticketDone from "../Redux/Actions/markTicketAsDone";
import updateUser from "../Redux/Actions/updateUser";
export default function Userdetails() {
let ID = useParams()
let dispatch = useDispatch()
let user = useSelector(state => state.userDetails)
const [toggleState, setToggleState] = useState(1);
let [userSpecs, setSpecs] = useState({
  Name: false,
  Username: false,
  Email: false,
  Location: false

})


let [input, setInput] = useState({

  name:"",
  username: "",
  email: "",
  location: ""


})

function handleClick(e) {

  setSpecs({...userSpecs, [e.target.name]: userSpecs[e.target.name]? false: true})

}


function handleChange(e) {

  setInput({...input, [e.target.name]: e.target.value})
}


useEffect(() => {
    dispatch(getUserDetails(ID))
  
  return () => {
    dispatch({type: CLEAR_USER_DETAILS})
  }
}, [])


  const toggleTab = (index) => {
    setToggleState(index);
  };


return (
    <div className={styles.containerTotal}>
      
        {user && <div> 
          <Box bgGradient='linear(to-b, blue.700, green.500)'>
          <Link to="/welcomeA">
          <Button margin={2} bg='#bfd6e5'>Back</Button>
          </Link>
          </Box>
          <Flex justifyContent='center' flexDirection='row' bg='#393E46'>
          <Box color='white'  width='25%' padding={4} minHeight='100vh'>
            <Flex justifyContent='center' alignItems='center' flexDirection='column'>
              <Heading as='h4' marginBottom={2}>User Details</Heading>
                <Image src={`${user.Image}`} alt="No Img" width='150' height='200'></Image>
                <Text margin={2}>Name: {user.Name}</Text>
                <button name="Name" onClick={(e) => handleClick(e)}>Update </button>
                <input name="name" hidden={userSpecs.Name? false: true} value={input.name}type="text" onChange={(e) => handleChange(e)}></input>
                <button hidden={userSpecs.Name? false: true} onClick={() => updateUser({Name: input.name}, user.ID, dispatch)}>Change</button>
                <Text margin={2}>Username: {user.Username}</Text>
                <button name="Username" onClick={(e) => handleClick(e)}>Update</button>
                <input  name="username" hidden={userSpecs.Username? false: true} value={input.username} type="text" onChange={(e) => handleChange(e)}></input>
                <button hidden={userSpecs.Username? false: true} onClick={() => updateUser({Username: input.username}, user.ID, dispatch)}>Change</button>
                <Text margin={2}>Email: {user.Email}</Text>
                <button name="Email" onClick={(e) => handleClick(e)}>Update</button>
                <input name="email"hidden={userSpecs.Email? false: true} value={input.email}type="email" onChange={(e) => handleChange(e)}></input>
                <button hidden={userSpecs.Email? false: true} onClick={() => updateUser({Email: input.email}, user.ID, dispatch)}>Change</button>
                <Text margin={2}>Location: {user.Location}</Text>
                <button name="Location" onClick={(e) => handleClick(e)}>Update</button>
                <input name="location" value={input.location} hidden={userSpecs.Location? false: true} type="text" onChange={(e) => handleChange(e)}></input>
                <button hidden={userSpecs.Location? false: true} onClick={() => updateUser({Location: input.location}, user.ID, dispatch)}>Change</button>
                <Text margin={2}>Role: {user.Role}</Text>
                <Text margin={2}>Is Online: {user.LoggedIn ? "Yes": "No"}</Text>
                <Text margin={2}>Is Ban: {user.isBan ? "Yes" : "No"}</Text>
              </Flex>
          </Box>
          <Box width='75%' padding={4} minHeight='100vh'>
            
                
            <div className={styles.container}>
                <div className={styles.bloctabs}>
                      <button
                        className={toggleState === 1 ? `${styles.tabs} ${styles.activetabs}`: styles.tabs}
                        onClick={() => toggleTab(1)}>
                        Item Carts
                      </button>
                      <button
                        className={toggleState === 2 ? `${styles.tabs} ${styles.activetabs}` : styles.tabs}
                        onClick={() => toggleTab(2)}>
                        Tickets
                      </button> 
                </div>
            
                <div className={styles.contenttabs}>
                    <div className={toggleState === 1 ? `${styles.content}  ${styles.activecontent}` : styles.content}>
                          {user.Cart && user.Cart.map(el =>(
                            <div>
                              <div>
                              <label>Event Name:</label>
                              <span>{el.Name}</span>
                              </div>

                              <div>
                              <label>Event Price:</label>
                              <span>{el.Price}</span>
                              </div>


                              <div>
                              <label>Event Location:</label>
                              <span>{el.Location}</span>
                              </div>

                          </div>
                      ))}
                    </div>

                    <div className={toggleState === 2 ? `${styles.content}  ${styles.activecontent}` : styles.content}>
                            
                            {user.supports && user.supports.map(el => (
                            <div>
                            <div>
                              <label>Problem Type:</label>
                              <h1>{el.problemType}</h1>
                            </div>

                            <div>
                              <label>Details</label>
                              <h1>{el.reason}</h1>
                            </div>

                            <div>
                              <label>Solved:</label>
                              <h1>{el.done? "Yes": "No"}</h1>
                            </div>

                            <button onClick={() => ticketDone(dispatch,el.supportID, el.done? false: true)}>{el.done? "Mark as Pending":"Mark as Done"}</button>
                            </div>
                           ))}

                    </div>
                </div>
            </div>
            </Box>
            </Flex>

             </div>}
    </div>
)

}