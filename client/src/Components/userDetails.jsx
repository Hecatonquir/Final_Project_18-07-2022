import React,{ useState, useEffect } from "react"; 
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_USER_DETAILS } from "../Redux/ActionTypes/actiontypes";
import { getUserDetails } from "../Redux/Actions/getUserDetails";
import { Placeholder } from "react-bootstrap";
import { Box, Button, Text, Heading, Flex, Image, Input, SimpleGrid } from "@chakra-ui/react";
import styles from '../Styles/UserDetails.module.css'
import ticketDone from "../Redux/Actions/markTicketAsDone";
import updateUser from "../Redux/Actions/updateUser";
import { decodeToken } from "react-jwt";
export default function Userdetails() {

  let token = document.cookie
		.split(';')[0]
	let token1 = 
		token
		.split('=')[1]
	let tokenDecoded = decodeToken(token1);
  

let ID = useParams()
let dispatch = useDispatch()
let user = useSelector(state => state.userDetails)
const [toggleState, setToggleState] = useState(1);
let [userSpecs, setSpecs] = useState({
  Name: false,
  Username: false,
  Email: false,
  Location: false,
  Password: false,

})


let [input, setInput] = useState({

  name:"",
  username: "",
  email: "",
  location: "",
  password: ""


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
          <Box bg='#222831'>
            <Link to="/welcomeA">
            <Button margin={2} bg='#FD7014' color='white'>Back</Button>
          </Link>
          </Box>
          <Flex  flexDirection='row' bg='#393E46'>
          <Box color='white'  width='25%' padding={4} minHeight='100vh'>
            <Flex flexDirection='column'>
                <Flex alignItems='center' flexDirection='column'>
                    <Heading as='h4' marginBottom={2}>User Details</Heading>
                    <Image src={`${user.Image}`} alt="No Img" width='150' height='200'></Image>
                </Flex>
                <Flex flexDirection='row' mt={6} justifyContent='space-between'>
                    <Text margin={2}>Name: {user.Name}</Text>
                    <Button bg='#FD7014' size='sm' mr={12} name="Name" onClick={(e) => handleClick(e)}>Update </Button>
                </Flex>
                <Flex flexDirection='row' mb={2} alignItems='center'>
                  <Input size='sm' width='15rem' name="name" hidden={userSpecs.Name? false: true} value={input.name}type="text" onChange={(e) => handleChange(e)}></Input>
                  <Button color='black' size='sm' borderLeftRadius='none' hidden={userSpecs.Name? false: true} onClick={() => updateUser({Name: input.name}, user.ID, dispatch)}>Change</Button>
                </Flex>
                <Flex flexDirection='row' justifyContent='space-between'>
                    <Text margin={2}>Username: {user.Username}</Text>
                    <Button bg='#FD7014' size='sm' mr={12} name="Username" onClick={(e) => handleClick(e)}>Update</Button>
                </Flex>
                <Flex flexDirection='row' mb={2} alignItems='center'>
                    <Input size='sm' width='15rem' name="username" hidden={userSpecs.Username? false: true} value={input.username} type="text" onChange={(e) => handleChange(e)}></Input>
                    <Button color='black' size='sm' borderLeftRadius='none' hidden={userSpecs.Username? false: true} onClick={() => updateUser({Username: input.username}, user.ID, dispatch)}>Change</Button>
                </Flex>
                <Flex flexDirection='row' justifyContent='space-between'>
                    <Text margin={2}>Email: {user.Email}</Text>
                    <Button bg='#FD7014' size='sm' mr={12} name="Email" onClick={(e) => handleClick(e)}>Update</Button>
                </Flex>
                <Flex flexDirection='row' mb={2} alignItems='center'>
                    <Input size='sm' width='15rem' name="email" hidden={userSpecs.Email? false: true} value={input.email} type="email" onChange={(e) => handleChange(e)}></Input>
                    <Button color='black' size='sm' borderLeftRadius='none' hidden={userSpecs.Email? false: true} onClick={() => updateUser({Email: input.email}, user.ID, dispatch)}>Change</Button>
                </Flex>
                <Flex flexDirection='row' justifyContent='space-between'>
                    <Text margin={2}>Location: {user.Location}</Text>
                    <Button bg='#FD7014' size='sm' mr={12} name="Location" onClick={(e) => handleClick(e)}>Update</Button>
                </Flex>
                <Flex flexDirection='row' mb={2} alignItems='center'>
                    <Input size='sm' width='15rem' name="location" value={input.location} hidden={userSpecs.Location? false: true} type="text" onChange={(e) => handleChange(e)}></Input>
                    <Button color='black' size='sm' borderLeftRadius='none' hidden={userSpecs.Location? false: true} onClick={() => updateUser({Location: input.location}, user.ID, dispatch)}>Change</Button>
                </Flex>

                <Flex flexDirection='row' justifyContent='space-between'>
                    <Text margin={2}>Password</Text>
                    <Button bg='#FD7014' size='sm' mr={12} name="Password" onClick={(e) => handleClick(e)}>Update</Button>
                </Flex>
                <Flex flexDirection='row' mb={2} alignItems='center'>
                    <Input size='sm' width='15rem' name="password" value={input.password} hidden={userSpecs.Password? false: true} type="text" onChange={(e) => handleChange(e)}></Input>
                    <Button color='black' size='sm' borderLeftRadius='none' hidden={userSpecs.Password? false: true} onClick={() => updateUser({Password: input.password}, user.ID, dispatch)}>Change</Button>
                </Flex>

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
                          <SimpleGrid columns={2} spacing={5}>
                            {user.supports && user.supports.map(el => (
                              <Flex bg='#ACAFB0 ' w='28rem' minH='14rem' borderRadius='10px' ml='2em'padding={3} flexDirection='column' >
                                  <Flex flexDirection='column'>
                                    <Text mt='1em'>Problem Type: {el.problemType}</Text>
                                    <Text mt='1em'>Details</Text>
                                    <Text mt='1em'>{el.reason}</Text>
                                    <Text mt='1em'>Solved: {el.done? "Yes": "No"}</Text>
                                  <Button bg='#FD7014' color='white' size='sm' mt={1} w='10em' p='0.5em' onClick={() => {ticketDone(dispatch,el.supportID, el.done? false: true,token1)
                                     dispatch(getUserDetails(user.ID))}}>{el.done? "Mark as Pending":"Mark as Done"}</Button>
                                  </Flex>
                            </Flex>
                           ))}
                          </SimpleGrid>
                    </div>
                </div>
            </div>
            </Box>
            </Flex>

             </div>}
    </div>
)

}