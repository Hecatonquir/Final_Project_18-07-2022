import { React, useEffect, useState } from 'react';
/* import { useDispatch } from 'react-redux'; */
import { Link /* , useNavigate */ } from 'react-router-dom';
import { postEvent } from '../Redux/Actions/postEvent';
import styles from '../Styles/AddEvent.module.css';
import validate from './Validations';
import { Widget } from '@uploadcare/react-widget';
import Nav from './Nav';
import {
	Box,
	Heading,
	Button,
	FormControl,
	FormLabel,
	Textarea,
	Input,
	Select,
	Text,
	Flex,
	InputGroup,
	InputLeftAddon 
} from '@chakra-ui/react';

function AddEvent() {
	/* 	const dispatch = useDispatch();
	const history = useNavigate(); */
  const [errors, setErrors] = useState({});
  const Cities = ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", 
  "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"];
  const Categories = ["Boliche", "Recital", "Musical","Teatro","Festival"];
  let today = new Date().toISOString().slice(0, 16); //------- Example of today 2022-07-24T14:30

	let [input, setInput] = useState({
		Name: '',
		img1: '',
		img2: '',
		img3: '',
		img4: '',
		imgPc: '',
		carrousel: '',
		Price: '',
		Quantity: '',
		Rating: '',
		Restrictions: '',
		City: '',
		Location: '',
		date: '',
		Hour: '',
		Detail: '',
		Category: '',
		AgeRestriction: "",
	});

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (errors.check !== "approved") {
      alert("Not created");
    } else {
      postEvent({
        Name: input.Name,
        Image: [input.img1, input.img2, input.img3, input.img4, input.imgPc],
        Carrousel: input.carrousel,
        Price: Number(input.Price),
        Quantity: Number(input.Quantity),
        Rating: Number(input.Rating),
        Category: [input.Category],
        Restrictions: input.Restrictions.split("/"),
        City: input.City,
        Location: input.Location,
        Date: input.date,
        Hour: input.Hour,
        Detail: input.Detail,
        AgeRestriction: input.AgeRestriction,
      });
      setInput({
        Name: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        imgPc: "",
        carrousel: "",
        Price: "",
        Quantity: "",
        Rating: "",
        Restrictions: "",
        City: "",
        Location: "",
        date: "",
        Hour: "",
        Detail: "",
        AgeRestriction: "",
      });
    }
  }

  return (
    <Box bgGradient="linear(to-r, #1c2333, #371a1e)" minHeight="100vh">
      <Nav />
      <Flex marginTop="10vh" justifyContent="center">
        <Box
          maxW="100%"
          bg="#b1b7b76a"
          border="1px solid #88cfd938"
          p={2}
          boxShadow=" 5px 5px 10px #2c2b2b, -10px -10px 20px #5c5a5a;"
          borderRadius="20px"
        >
          <Heading as="h1" color="white" textAlign="center" margin={6}>
            Add Event
          </Heading>
          <form style={{ width: "40em" }}>
            <FormControl marginBottom={4}>
              <FormLabel>*Event name</FormLabel>
              <Input
                type="text"
                value={input.Name}
                id="Name"
                name="Name"
                placeholder="(Max 25 characters)"
                required
                variant='flushed'
                onChange={(e) => handleChange(e)}
              />
              {input.Name !== "" && errors.Name && (
                <Text color="red">{errors.Name}</Text>
              )}
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>*Date</FormLabel>
              <Input
                type="datetime-local"
                min={today}
                value={input.date}
                name="date"
                placeholder="day / month / year"
				variant='flushed'
                onChange={(e) => handleChange(e)}
              />{" "}
              {input.date !== "" && errors.date && (
                <Text color="red">{errors.date}</Text>
              )}
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>*City</FormLabel>
              <Select
                value={input.City}
                name="City"
				variant='flushed'
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Select City
                </option>
                {Cities.map((p) => {
                  return (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  );
                })}
              </Select>
              {input.City !== "" && errors.City && (
                <Text color="red">{errors.City}</Text>
              )}
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>*Exact Location</FormLabel>
              <Input
                type="text"
                value={input.Location}
                name="Location"
                placeholder="(Max 25 characters)"
				variant='flushed'
                onChange={(e) => handleChange(e)}
              />
              {input.Location !== "" && errors.Location && (
                <Text color="red">{errors.Location}</Text>
              )}
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>*Category</FormLabel>
              <Select
                value={input.Category}
                name="Category"
				variant='flushed'
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Select Category
                </option>
                {Categories.map((p) => {
                  return (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  );
                })}
              </Select>
              {input.Category !== "" && errors.Category && (
                <Text color="red">{errors.Category}</Text>
              )}
            </FormControl>

            <FormControl marginBottom={4}> 
              <FormLabel>*Image 1</FormLabel>
              <Input
                type="text"
                value={input.img1}
                id="img1"
                name="img1"
                placeholder="Insert URL here"
				variant='flushed'
                onChange={(e) => handleChange(e)}
              />
              {input.img1 !== "" && errors.img1 && (
                <Text color="red">{errors.img1}</Text>
              )}
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>Image 2</FormLabel>
              <Input
                type="text"
                value={input.img2}
                id="img2"
                name="img2"
                placeholder="Insert URL here"
				variant='flushed'
                onChange={(e) => handleChange(e)}
              />
              {errors.img2 && <Text color="red">{errors.img2}</Text>}
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>Image 3</FormLabel>
              <Input
                type="text"
                value={input.img3}
                id="img3"
                name="img3"
                placeholder="Insert URL here"
				variant='flushed'
                onChange={(e) => handleChange(e)}
              />
              {errors.img3 && <Text color="red">{errors.img3}</Text>}
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>Image 4</FormLabel>
              <Input
                type="text"
                value={input.img4}
                id="img4"
                name="img4"
                placeholder="Insert URL here"
				variant='flushed'
                onChange={(e) => handleChange(e)}
              />
              {errors.img4 && <Text color="red">{errors.img4}</Text>}
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>Image 4</FormLabel>
              <Widget
                publicKey="4a7fa09f2188af9b76a3"
                id="file"
                name="photos"
                value={input.imgPc}
                onChange={(e) => {
                  setInput({
                    ...input,
                    imgPc: e.originalUrl,
                  });
                }}
              />
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>Carrousel image</FormLabel>
              <Input
                type="text"
                value={input.carrousel}
                id="carrousel"
                name="carrousel"
                placeholder="Insert URL here"
				variant='flushed'
                onChange={(e) => handleChange(e)}
              />
              {errors.carrousel && <Text color="red">{errors.carrousel}</Text>}
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                value={input.Price}
                id="Price"
                name="Price"
                min="0"
                placeholder="$ (in numbers)"
                required
				variant='flushed'
                onChange={(e) => handleChange(e)}
              />
              {errors.Price && <Text color="red">{errors.Price}</Text>}
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>Quantity</FormLabel>
              <Input
                type="number"
                value={input.Quantity}
                name="Quantity"
                min="0"
                placeholder="Quantity"
				variant='flushed'
                onChange={(e) => handleChange(e)}
              />
              {errors.Quantity && <Text color="red">{errors.Quantity}</Text>}
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>Age Restriction</FormLabel>
			  <InputGroup>
			  	<InputLeftAddon children='+'/>
				  <Input
                type="number"
                value={input.AgeRestriction}
                name="AgeRestriction"
                placeholder="Put number"
				variant='flushed'
				marginLeft={1}
                onChange={(e) => handleChange(e)}
              />
			  </InputGroup>
              {errors.AgeRestriction && (
                <Text color="red">{errors.AgeRestriction}</Text>
              )}
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>Restrictions</FormLabel>
              <Textarea
                type="text"
                value={input.Restrictions}
                name="Restrictions"
                placeholder='Separate each one using "/" '
                onChange={(e) => handleChange(e)}
              />
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>*Detail</FormLabel>
              <Textarea
                type="text"
                value={input.Detail}
                name="Detail"
                placeholder="Insert Detail"
                className={styles.input}
                onChange={(e) => handleChange(e)}
              />
            </FormControl>

            <Box marginBottom={4}>
              <Text color="red">*Required fields</Text>
            </Box>

            <Box textAlign="center" marginBottom={4}>
              <Button
			  	bg='#f4a69a'
                onClick={(e) => handleSubmit(e)}
                disabled={
                  Object.keys(errors).length
                    ? errors.check === "approved"
                      ? false
                      : true
                    : true
                }
              >
                Create
              </Button>
            </Box>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

export default AddEvent;
