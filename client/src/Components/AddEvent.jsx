import { React, useState } from "react";
/* import { useDispatch } from 'react-redux'; */
import { Link /* , useNavigate */ } from "react-router-dom";
import { postEvent } from "../Redux/Actions/postEvent";
// import styles from '../Styles/AddEvent.module.css';
import validate from "./Validations";
import Nav from "./Nav";
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";

function AddEvent() {
  /* 	const dispatch = useDispatch();
	const history = useNavigate(); */

  const [errors, setErrors] = useState({});
  const Cities = ["CABA", "La Plata", "La Pampa", "Bariloche"];
  const Categories = ["Boliche", "Recital", "Musical"];

  let [input, setInput] = useState({
    Name: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    Price: "",
    Quantity: "",
    Rating: "",
    Restrictions: "",
    City: "",
    Location: "",
    Date: "",
    Hour: "",
    Detail: "",
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
    /* console.log({ input }); */
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (errors.check !== "approved") {
      alert("Not created");
    } else {
      postEvent({
        Name: input.Name,
        Image: [input.img1, input.img2, input.img3, input.img4],
        Price: Number(input.Price),
        Quantity: Number(input.Quantity),
        Rating: Number(input.Rating),
        Category: [input.Category],
        Restrictions: input.Restrictions.split("/"),
        City: input.City,
        Location: input.Location,
        Date: input.Date,
        Hour: input.Hour,
        Detail: input.Detail,
      });
      console.log(
        "🐲🐲🐲 / file: AddEvent.jsx / line 61 / Output:Restrictions:\n ",
        input.Restrictions.split("/")
      );

      setInput({
        Name: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        Price: "",
        Quantity: "",
        Rating: "",
        Restrictions: "",
        City: "",
        Location: "",
        Date: "",
        Hour: "",
        Detail: "",
      });
    }
  }

  // return (
  // 	<div>
  // 		{/* <nav>
  // 			<Link to={'/'}>
  // 				<button className={styles.Button}>Back</button>
  // 			</Link>
  // 		</nav> */}
  // 		<Nav />
  // 		<div className={styles.container}>
  // 			<h1 className={styles.title}>Add Event</h1>
  // 			<form className={styles.form}>
  // 				<div>
  // 					<label htmlFor='Name'>* Event name: &nbsp; </label>
  // 					<input
  // 						type='text'
  // 						value={input.Name}
  // 						id='Name'
  // 						name='Name'
  // 						placeholder='Name'
  // 						required
  // 						onChange={(e) => handleChange(e)}
  // 					/>
  // 					{errors.Name && <p style={{ color: 'red' }}>{errors.Name}</p>}
  // 				</div>
  // 				<div>
  // 					<label htmlFor='Date'>* Date: &nbsp;</label>
  // 					<input
  // 						type='datetime-local'
  // 						value={input.Date}
  // 						name='Date'
  // 						placeholder='day / month / year'
  // 						onChange={(e) => handleChange(e)}
  // 					/>{' '}
  // 					{errors.Date && <p style={{ color: 'red' }}>{errors.Date}</p>}
  // 				</div>
  // 				{/* <div>
  // 					<label htmlFor='Hour'>* Hour: &nbsp;</label>
  // 					<input
  // 						type='time'
  // 						value={input.Hour}
  // 						name='Hour'
  // 						placeholder='Hour : minute'
  // 						onChange={(e) => handleChange(e)}
  // 					/>{' '}
  // 					{errors.Hour && <p style={{ color: 'red' }}>{errors.Hour}</p>}
  // 				</div> */}
  // 				<div>
  // 					<label htmlFor='City'>* City: &nbsp;</label>
  // 					{/* <select value={input.City} name='City' onChange={(e) => handleChange(e)}>
  // 						<option>Select City</option>
  // 						<option>CABA</option>
  // 						<option>La Plata</option>
  // 						<option>La Pampa</option>
  // 						<option>Bariloche</option>
  // 					</select> */}
  // 					<select value={input.City} name='City' onChange={(e) => handleChange(e)}>
  // 						<option value=''> Select City </option>
  // 						{Cities.map((p) => {
  // 							return (
  // 								<option key={p} value={p}>
  // 									{p}
  // 								</option>
  // 							);
  // 						})}
  // 					</select>
  // 					{errors.City && <p style={{ color: 'red' }}>{errors.City}</p>}
  // 				</div>
  // 				<div>
  // 					<label htmlFor='Location'>* Exact Location: &nbsp;</label>
  // 					<input
  // 						type='text'
  // 						value={input.Location}
  // 						name='Location'
  // 						placeholder='Exact Location'
  // 						onChange={(e) => handleChange(e)}
  // 					/>
  // 					{errors.Location && <p style={{ color: 'red' }}>{errors.Location}</p>}
  // 				</div>
  // 				<div>
  // 					<label htmlFor='Category'>* Category: &nbsp;</label>
  // 					<select value={input.Category} name='Category' onChange={(e) => handleChange(e)}>
  // 						<option value=''> Select Category </option>
  // 						{Categories.map((p) => {
  // 							return (
  // 								<option key={p} value={p}>
  // 									{p}
  // 								</option>
  // 							);
  // 						})}
  // 					</select>
  // 					{errors.Category && <p style={{ color: 'red' }}>{errors.Category}</p>}
  // 				</div>

  // 				<div>
  // 					<label htmlFor='img1'>* Image 1: &nbsp; </label>
  // 					<input
  // 						type='text'
  // 						value={input.img1}
  // 						id='img1'
  // 						name='img1'
  // 						placeholder='img'
  // 						onChange={(e) => handleChange(e)}
  // 					/>
  // 					{errors.img1 && <p style={{ color: 'red' }}>{errors.img1}</p>}
  // 				</div>
  // 				<div>
  // 					<label htmlFor='img2'>Image 2: &nbsp; </label>
  // 					<input
  // 						type='text'
  // 						value={input.img2}
  // 						id='img2'
  // 						name='img2'
  // 						placeholder='img'
  // 						onChange={(e) => handleChange(e)}
  // 					/>
  // 					{errors.img2 && <p style={{ color: 'red' }}>{errors.img2}</p>}
  // 				</div>
  // 				<div>
  // 					<label htmlFor='img3'>Image 3: &nbsp; </label>
  // 					<input
  // 						type='text'
  // 						value={input.img3}
  // 						id='img3'
  // 						name='img3'
  // 						placeholder='img'
  // 						onChange={(e) => handleChange(e)}
  // 					/>
  // 					{errors.img3 && <p style={{ color: 'red' }}>{errors.img3}</p>}
  // 				</div>
  // 				<div>
  // 					<label htmlFor='img4'>Image 4: &nbsp; </label>
  // 					<input
  // 						type='text'
  // 						value={input.img4}
  // 						id='img4'
  // 						name='img4'
  // 						placeholder='img'
  // 						onChange={(e) => handleChange(e)}
  // 					/>
  // 					{errors.img4 && <p style={{ color: 'red' }}>{errors.img4}</p>}
  // 				</div>
  // 				<div>
  // 					<label htmlFor='Price'>Price: &nbsp;</label>
  // 					<input
  // 						type='number'
  // 						value={input.Price}
  // 						id='Price'
  // 						name='Price'
  // 						placeholder='Price'
  // 						required
  // 						onChange={(e) => handleChange(e)}
  // 					/>
  // 				</div>
  // 				<div>
  // 					<label htmlFor='Quantity'>Quantity: &nbsp;</label>
  // 					<input
  // 						type='text'
  // 						value={input.Quantity}
  // 						name='Quantity'
  // 						placeholder='Quantity'
  // 						onChange={(e) => handleChange(e)}
  // 					/>
  // 				</div>

  // 				<div>
  // 					<label htmlFor='Restrictions'>Restrictions: &nbsp;</label>
  // 					<input
  // 						type='text'
  // 						value={input.Restrictions}
  // 						name='Restrictions'
  // 						placeholder='Separate Restrictions using /'
  // 						onChange={(e) => handleChange(e)}
  // 					/>
  // 				</div>
  // 				<div>
  // 					<label htmlFor='Detail'>Detail: &nbsp;</label>
  // 					<input
  // 						type='text'
  // 						value={input.Detail}
  // 						name='Detail'
  // 						placeholder='Separate Detail using /'
  // 						onChange={(e) => handleChange(e)}
  // 					/>
  // 				</div>
  // 				<div className={styles.divbutton}>
  // 					<button
  // 						onClick={(e) => handleSubmit(e)}
  // 						className={styles.Button2}
  // 						disabled={
  // 							Object.keys(errors).length ? (errors.check === 'approved' ? false : true) : true
  // 						}>
  // 						Create
  // 					</button>
  // 				</div>
  // 			</form>
  // 		</div>
  // 	</div>
  // );

  return (
    <Box bgGradient="linear(to-r, #1c2333, #371a1e)" minHeight='100vh'>
      <Nav />
      <Flex justifyContent="center">
        <Box bg="gray" width="55%" padding={4} marginTop={4} borderRadius="2%">
          <Heading as="h1" color="white" fontSize="2em" textAlign="center">
            Add Event
          </Heading>

          <FormControl isRequired marginTop={4}>
            <FormLabel>Event name</FormLabel>
            <Input
              type="text"
              value={input.Name}
              id="Name"
              name="Name"
              placeholder="Name"
              onChange={(e) => handleChange(e)}
            />
            {errors.Name && <Text style={{ color: "red" }}>{errors.Name}</Text>}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              value={input.Date}
              name="Date"
              onChange={(e) => handleChange(e)}
            />
            {errors.Date && <Text style={{ color: "red" }}>{errors.Date}</Text>}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Select
              placeholder="Select city"
              value={input.City}
              name="City"
              onChange={(e) => handleChange(e)}
            >
              {Cities.map((p) => {
                return (
                  <option key={p} value={p}>
                    {p}
                  </option>
                );
              })}
            </Select>
            {errors.City && <Text style={{ color: "red" }}>{errors.City}</Text>}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Exact location</FormLabel>
            <Input
              type="text"
              value={input.Location}
              name="Location"
              placeholder="Exact Location"
              onChange={(e) => handleChange(e)}
            />
            {errors.Location && (
              <Text style={{ color: "red" }}>{errors.Location}</Text>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Category</FormLabel>
            <Select
              placeholder="Select category"
              value={input.Category}
              name="Category"
              onChange={(e) => handleChange(e)}
            >
              {Categories.map((p) => {
                return (
                  <option key={p} value={p}>
                    {p}
                  </option>
                );
              })}
            </Select>
            {errors.Category && (
              <Text style={{ color: "red" }}>{errors.Category}</Text>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Image 1</FormLabel>
            <Input
              type="text"
              value={input.img1}
              id="img1"
              name="img1"
              placeholder="img"
              onChange={(e) => handleChange(e)}
            />
            {errors.img1 && <Text style={{ color: "red" }}>{errors.img1}</Text>}
          </FormControl>

          <FormControl>
            <FormLabel>Image 2</FormLabel>
            <Input
              type="text"
              value={input.img2}
              id="img2"
              name="img2"
              placeholder="img"
              onChange={(e) => handleChange(e)}
            />
            {errors.img2 && <Text style={{ color: "red" }}>{errors.img2}</Text>}
          </FormControl>

          <FormControl>
            <FormLabel>Image 3</FormLabel>
            <Input
              type="text"
              value={input.img3}
              id="img3"
              name="img3"
              placeholder="img"
              onChange={(e) => handleChange(e)}
            />
            {errors.img3 && <Text style={{ color: "red" }}>{errors.img3}</Text>}
          </FormControl>

          <FormControl>
            <FormLabel>Image 4</FormLabel>
            <Input
              type="text"
              value={input.img4}
              id="img4"
              name="img4"
              placeholder="img"
              onChange={(e) => handleChange(e)}
            />
            {errors.img4 && <Text style={{ color: "red" }}>{errors.img4}</Text>}
          </FormControl>

          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              value={input.Price}
              id="Price"
              name="Price"
              placeholder="Price"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Quantity</FormLabel>
            <Input
              type="text"
              value={input.Quantity}
              name="Quantity"
              placeholder="Quantity"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Restrictions</FormLabel>
            <Input
              type="text"
              value={input.Restrictions}
              name="Restrictions"
              placeholder="Separate Restrictions using /"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Detail</FormLabel>
            <Input
              type="text"
              value={input.Detail}
              name="Detail"
              placeholder="Separate Detail using /"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>

          <Center>
            <Button
              marginTop={4}
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
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}

export default AddEvent;
