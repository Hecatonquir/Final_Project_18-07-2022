import { React, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../Redux/Actions/getDetails";
import Loader from "./Loader.jsx";
import styles from "../Styles/Detail.module.css";
import { clearDetail } from "../Redux/Actions/clearDetail";
import AddToCartButton from "./AddToCartButton";
import { addToFavourites } from "../Redux/Actions/addToFav";
import { removeFromFavourites } from "../Redux/Actions/removeFromFav";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Nav from "./Nav.jsx";
import fav from "../Media/favorito.png";
import fav2 from "../Media/favorito2.png";
import DetailCarousel from "./DetailCarousel";
import swal from "sweetalert";
import { decodeToken } from "react-jwt";
import { updateEvent } from "../Redux/Actions/updateEvent";
import MapDetails from "./MapDetails";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const active = useSelector((state) => state.loginState);
  var event = useSelector((state) => state.eventDetail);
  const Allfavourites = useSelector((state) => state.favourites);
  var exitFav = Allfavourites.find((e) => e.ID === id);
  let token = document.cookie.split(';')[0];
	let token1 = token.split('=')[1];
	let tokenDecoded = decodeToken(token1);
  console.log(event)

  let [userSpecs, setSpecs] = useState({
    Name: false,
    City: false,
    Email: false,
    Location: false,
    Price: false,
    Quantity: false,
    Restrictions: false,
    AgeRestriction: false,
    Detail: false
  
  })

  let [input, setInput] = useState({

    Name:"",
    Date: "",
    City: "",
    Location: "",
    Price: "",
    Quantity: 0,
    Restrictions: "",
    AgeRestriction: "",
    Detail: ""
  
  
  })

  function handleChange(e) {

    setInput({...input, [e.target.name]: e.target.value})
  }

  function handleClick(e) {

    setSpecs({...userSpecs, [e.target.name]: userSpecs[e.target.name]? false: true})
  
  }
  
  





  useEffect(() => {
    dispatch(getDetail(id));
    
    return () => dispatch(clearDetail());
  }, [dispatch, id]);

  function handleClickFav(id) {
    if (token) {
      if (!exitFav) {
        dispatch(addToFavourites(id));
        swal("Added to favorite", { icon: "success" });
      } else {
        dispatch(removeFromFavourites(id));
        swal("Removed from favorites", { icon: "warning" });
      }
    } else {
      navigate("/login");
    }
  }


	return (
		<Box bgGradient='#222831'>
			{event[0] ? (
				<Box bg='#EEEEEE'>
					<Nav />
          
					<Flex justifyContent='center' alignItems='center' height='100vh'>
						<Box
							maxW='100%'
							bg='#b1b7b76a'
							border='1px solid #88cfd938'
							p={2}
							boxShadow=' 5px 5px 10px #2c2b2b, -10px -10px 20px #5c5a5a;'
							borderRadius='20px'>
							<Flex alignItems='center'>
								<Box marginLeft={4}>
									<DetailCarousel />
								</Box>
								<div className={styles.cards}>
									{/* <div className={styles.leftcolumn}>

 

                  <Flex alignItems="center">
                    <Box marginRight={4}>
                      <DetailCarousel />
                    </Box>
                  </Flex>
                </div> */}
                  <div className={styles.rightcolumn}>
                    <Box marginTop={3} textAlign="start">
                      <Stack spacing={3}>
                        <Heading as="h1">{event[0].Name}</Heading>
                        <button name="Name"hidden={tokenDecoded && tokenDecoded.role=== "Admin" && active ? false: true} onClick={(e) => handleClick(e)}>Update</button>
                        <input name="Name" value={input.Name} hidden={userSpecs.Name? false: true} type="text" onChange={(e) => handleChange(e)}></input>
                <button name="Name"hidden={userSpecs.Name? false: true} onClick={(e) => {updateEvent({Name: input.Name}, id, dispatch)
              handleClick(e)
              setInput({...input, [e.target.name]: ""})}}>Change</button>
                        <Text>City: {event[0].City}</Text>
                        <button name="City" hidden={tokenDecoded && tokenDecoded.role=== "Admin" && active ? false: true} onClick={(e) => handleClick(e)}>Update</button>
                        <input name="City" value={input.City} hidden={userSpecs.City? false: true} type="text" onChange={(e) => handleChange(e)}></input>
                <button name="City"hidden={userSpecs.City? false: true} onClick={(e) => {updateEvent({City: input.City}, id, dispatch)
                handleClick(e)
                setInput({...input, [e.target.name]: ""})}}>Change</button>
                        <Text>Location: {event[0].Location}</Text>
                        <button name="Location" hidden={tokenDecoded && tokenDecoded.role=== "Admin" && active ? false: true} onClick={(e) => handleClick(e)}>Update</button>
                        <input name="Location" value={input.Location} hidden={userSpecs.Location? false: true} type="text" onChange={(e) => handleChange(e)}></input>
                <button name="Location"hidden={userSpecs.Location? false: true} onClick={(e) => {updateEvent({Location: input.Location}, id, dispatch)
                handleClick(e)
                setInput({...input, [e.target.name]: ""})}}>Change</button>
                        <Text>Category: {event[0].Category}</Text>
                        <button name="Category"hidden={tokenDecoded && tokenDecoded.role=== "Admin" && active ? false: true} onClick={(e) => handleClick(e)}>Update</button>
                        <input name="Category" value={input.Category} hidden={userSpecs.Location? false: true} type="text" onChange={(e) => handleChange(e)}></input>
                <button name="Category"hidden={userSpecs.Category? false: true} onClick={(e) => {updateEvent({Category: input.Category}, id, dispatch)
                handleClick(e)
                setInput({...input, [e.target.name]: ""})}}>Change</button>
                        <Text>Date: {event[0].Date}</Text>
                        <button name="Date" hidden={tokenDecoded && tokenDecoded.role=== "Admin" && active ? false: true} onClick={(e) => handleClick(e)}>Update</button>
                        <input name="Date" value={input.Date} hidden={userSpecs.Location? false: true} type="text" onChange={(e) => handleChange(e)}></input>
                <button name="Date"hidden={userSpecs.Date? false: true} onClick={(e) => {updateEvent({Date: input.Date}, id, dispatch)
                handleClick(e)
                setInput({...input, [e.target.name]: ""})}}>Change</button>
                        <Text>
                          Price:{" "}
                          {event[0].Price === 0
                            ? " Free"
                            : " $ " + event[0].Price}
                            
                        </Text>
                        <button name="Price" hidden={tokenDecoded && tokenDecoded.role=== "Admin" && active ? false: true} onClick={(e) => handleClick(e)}>Update</button>
                        <input name="Price" value={input.Price} hidden={userSpecs.Price? false: true} type="text" onChange={(e) => handleChange(e)}></input>
                <button name="Price"hidden={userSpecs.Price? false: true} onClick={(e) => {updateEvent({Price: input.Price},id,dispatch)
                handleClick(e)
                setInput({...input, [e.target.name]: ""})}}>Change</button>
                        <Text>
                          Tickets Available:{" "}
                          {event[0].Price === 0 && event[0].Quantity=== 0
                            ? "This event does't require tickets"
                            : event[0].Price !== 0 && event[0].Quantity === 0? "All entrances were Sold Out!":
                            event[0].Quantity}                            
                        </Text>
                        <button name="Quantity" hidden={tokenDecoded && tokenDecoded.role=== "Admin" && active ? false: true} onClick={(e) => handleClick(e)}>Update</button>
                        <input name="Quantity" value={input.Quantity} hidden={userSpecs.Quantity? false: true} type="text" onChange={(e) => handleChange(e)}></input>
                <button name="Quantity"hidden={userSpecs.Quantity? false: true} onClick={(e) => {updateEvent({Quantity: input.Quantity}, id, dispatch)
                handleClick(e)
                setInput({...input, [e.target.name]: ""})}}>Change</button>
                        <Text>
                          AgeRestriction:{" "}
                          {event[0].AgeRestriction === 0
                            ? " Suitable for all ages"
                            : event[0].AgeRestriction}
                        </Text>
                        <button name="AgeRestriction" hidden={tokenDecoded && tokenDecoded.role=== "Admin" && active ? false: true} onClick={(e) => handleClick(e)}>Update</button>
                        <input type="number" name="AgeRestriction" value={input.AgeRestriction} hidden={userSpecs.AgeRestriction? false: true} onChange={(e) => handleChange(e)}></input>
                <button name="AgeRestriction" hidden={userSpecs.AgeRestriction? false: true} onClick={(e) => {updateEvent({AgeRestriction: input.AgeRestriction}, id, dispatch)
                handleClick(e)
                setInput({...input, [e.target.name]: ""})}}>Change</button>
                        <Text>
                          Restrictions:{" "}
                          {event[0].Restrictions.length
                            ? event[0].Restrictions.join(" - ")
                            : "Unrestricted Event"}
                        </Text>
                        <button name="Restrictions" hidden={tokenDecoded && tokenDecoded.role=== "Admin" && active ? false: true} onClick={(e) => handleClick(e)}>Update</button>
                        <input name="Restrictions" value={input.Restrictions} hidden={userSpecs.Restrictions? false: true} type="text" onChange={(e) => handleChange(e)}></input>
                <button name="Restrictions" hidden={userSpecs.Restrictions? false: true} onClick={(e) => {updateEvent({Restrictions: input.Restrictions}, id, dispatch)
                handleClick(e)
                setInput({...input, [e.target.name]: ""})}}>Change</button>
                        <Text width='90%'>Detail: {event[0].Detail}</Text>
                        <button name="Detail" hidden={tokenDecoded && tokenDecoded.role=== "Admin" && active ? false: true} onClick={(e) => handleClick(e)}>Update</button>
                        <input name="Detail" value={input.Detail} hidden={userSpecs.Detail? false: true} type="text" onChange={(e) => handleChange(e)}></input>
                <button name="Detail"hidden={userSpecs.Detail? false: true} onClick={(e) =>{ updateEvent({Detail: input.Detail}, id, dispatch) 
                handleClick(e)
                setInput({...input, [e.target.name]: ""})}}>Change</button>
                      </Stack>
                      <div className={styles.containerButton}>
                        <Button bg="white">
                          {exitFav ? (
                            <img
                              src={fav2}
                              alt="not imgfav"
                              className={styles.favicon}
                              onClick={() => handleClickFav(event[0].ID)}
                            />
                          ) : (
                            <img
                              src={fav}
                              alt="not imgfav"
                              className={styles.favicon}
                              onClick={() => handleClickFav(event[0].ID)}
                            />
                          )}
                        </Button>
                        <AddToCartButton id={id} />
                      </div>
                    </Box>
                  </div>
                </div>

                <Flex justifyContent='center' flexDirection='column'>
                    <Text fontSize='1.5em' textAlign='center' >Location on map</Text>
                    <MapDetails data={event[0].Coords} location={event[0].Location}/>
              </Flex>

              </Flex>
            </Box>
          </Flex>
        
        </Box>
      ) : (
        <Box>
          <nav className={styles.nav}>
            <Link to="/">
              <Button margin={2} bg="#1a78b1">
                Back
              </Button>
            </Link>
          </nav>
          <Loader />
        </Box>
      )}
    </Box>
  );
}
