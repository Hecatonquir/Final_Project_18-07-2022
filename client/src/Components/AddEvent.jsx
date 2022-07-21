import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postEvent } from "../Redux/Actions/postEvent";
import styles from '../Styles/AddEvent.module.css'

function validate(input) {
  let errors = {};

  if (input.Name.length === 0) {
    errors.Name = "Name is required.";
  } else if (input.Name.length !== 0) {
    if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.Name) || input.Name.length > 25) {
      errors.Name =
        "The first letter must be uppercase and don't start with a number and don´t pass 25 characters.";
    }
  }

  if (input.img1.length !== 0) {
    if (
      input.img1 &&
      !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(input.img1)
    ) {
      errors.img1 = 'It must be a valid "URL" or be empty.';
    }
  }

  if (input.img2.length !== 0) {
    if (
      input.img2 &&
      !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(input.img2)
    ) {
      errors.img2 = 'It must be a valid "URL" or be empty.';
    }
  }

  if (input.img3.length !== 0) {
    if (
      input.img3 &&
      !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(input.img3)
    ) {
      errors.img3 = 'It must be a valid "URL" or be empty.';
    }
  }

  if (input.img4.length !== 0) {
    if (
      input.img4 &&
      !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(input.img4)
    ) {
      errors.img4 = 'It must be a valid "URL" or be empty.';
    }

    if (input.price_min.length === 0) {
      errors.price_min = "Height min is required.";
    } else if (input.price_min.length !== 0) {
      if (!input.price_min || !/^[1-9]\d*(\.\d+)?$/.test(input.price_min)) {
        errors.price_min =
          "You can only put numbers that are different from zero.";
      }
    }

    if (input.price_max.length === 0) {
      errors.price_max = "Height max is required.";
    } else if (input.price_max.length !== 0) {
      if (
        !input.price_max ||
        !/^[1-9]\d*(\.\d+)?$/.test(input.price_max) ||
        parseInt(input.price_max) <= parseInt(input.price_min)
      ) {
        errors.price_max =
          "You can only put numbers that are different from zero. The maximum value cannot be less than the minimum.";
      }
    }

    if (input.promotion.length > 1000) {
      errors.promotion = "The maximum characters are 250.";
    }

    if (input.permitted.length > 1000) {
      errors.permitted = "The maximum characters are 250.";
    }

    if (input.notPermitted.length > 1000) {
      errors.notPermitted = "The maximum characters are 250.";
    }

    return errors;
  }
}

function AddEvent() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [errors, setErrors] = useState({});

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
    Location: ""
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      
    });
    console.log(input)
    
   
  }

   function  handleSubmit(e) {
    e.preventDefault();

    if (Object.keys(errors).length !== 0) {
      alert("Not created");
    } else {
      postEvent({Name: input.Name, Image: input.img1, Location: input.Location, Category: ["electronica"], City: input.City,});
      
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

        
      });
   
    }
  }

  return (
    <div>
      <nav className={styles.nav}>
        <Link to={"/"}>
          <button className={styles.Button}>Back</button>
        </Link>
      </nav>
      <div className={styles.container}>
      <h1 className={styles.title}>Add Event</h1>
      <form className={styles.form}>
        <div>
          <label htmlFor="Name" >*Event name:</label>
          <input
            type="text"
            value={input.Name}
            id="Name"
            name="Name"
            placeholder="Name"
            required
            onChange={(e) => handleChange(e)}
          />
          {errors.Name && <p>{errors.Name}</p>}
        </div>
        <div>
          <label htmlFor="img1">Image 1:</label>
          <input
            type="text"
            value={input.img1}
            id="img1"
            name="img1"
            placeholder="img"
            onChange={(e) => handleChange(e)}
          />
          {errors.img1 && <p>{errors.img1}</p>}
        </div>
        <div>
          <label htmlFor="img2">Image 2:</label>
          <input
            type="text"
            value={input.img2}
            id="img2"
            name="img2"
            placeholder="img"
            onChange={(e) => handleChange(e)}
          />
          {errors.img2 && <p>{errors.img2}</p>}
        </div>
        <div>
          <label htmlFor="img3">Image 3:</label>
          <input
            type="text"
            value={input.img3}
            id="img3"
            name="img3"
            placeholder="img"
            onChange={(e) => handleChange(e)}
          />
          {errors.img3 && <p>{errors.img3}</p>}
        </div>
        <div>
          <label htmlFor="img4">Image 4:</label>
          <input
            type="text"
            value={input.img4}
            id="img4"
            name="img4"
            placeholder="img"
            onChange={(e) => handleChange(e)}
          />
          {errors.img4 && <p>{errors.img4}</p>}
        </div>
        <div>
          <label htmlFor="Price">*Price:</label>
          <input
            type="number"
            value={input.Price}
            id="Price"
            name="Price"
            placeholder="Price"
            required
            onChange={(e) => handleChange(e)}
          />
          {errors.Price && <p>{errors.Price}</p>}
        </div>

        <div>
          <label htmlFor="Quantity">Quantity:</label>
          <input
            type="text"
            value={input.Quantity}
            name="Quantity"
            placeholder="Quantity"
            onChange={(e) => handleChange(e)}
          />
        </div>
       
        <div>
          <label htmlFor="City">City:</label>
          <select
  
            value={input.City}
            name="City"
            
            onChange={(e) => handleChange(e)}
          >
            <option>Select City</option>
            <option>CABA</option>
            <option>La Plata</option>
            <option>La Pampa</option>
            <option>Bariloche</option>
            </select>
          
        </div>
        

        <div>
          <label htmlFor="Location">Exact Location:</label>
          <input
            type="text"
            value={input.Location}
            name="Location"
            placeholder="Exact Location"
            onChange={(e) => handleChange(e)}
          />
        </div>

        
        <div>
          <label htmlFor="Restrictions">Restrictions:</label>
          <input
            type="text"
            value={input.Restrictions}
            name="Restrictions"
            placeholder="Restrictions"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.divbutton}>
          <button onClick={(e) =>handleSubmit(e)} className={styles.Button2}>Create</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default AddEvent;
