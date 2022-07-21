import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postEvent } from "../Redux/Actions/postEvent";

function validate(input) {
  let errors = {};

  if (input.name.length === 0) {
    errors.name = "Name is required.";
  } else if (input.name.length !== 0) {
    if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.name) || input.name.length > 25) {
      errors.name =
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

  const [input, setInput] = useState({
    name: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    price_min: "",
    price_max: "",
    promotion: "",
    permitted: "",
    notPermitted: "",
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

    if (Object.keys(errors).length !== 0) {
      alert("Not created");
    } else {
      dispatch(postEvent(input));
      alert("Created successfully");
      setInput({
        name: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        price_min: "",
        price_max: "",
        promotion: "",
        permitted: "",
        notPermitted: "",
      });
      history.push("/agregarRuta");
    }
  }

  return (
    <div>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      <h1>Add Event</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">*Event name:</label>
          <input
            type="text"
            value={input.name}
            id="name"
            name="name"
            placeholder="name"
            required
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="img1">Image 1:</label>
          <input
            type="file"
            value={input.img1}
            id="img1"
            name="img1"
            placeholder="img1"
            onChange={(e) => handleChange(e)}
          />
          {errors.img1 && <p>{errors.img1}</p>}
        </div>
        <div>
          <label htmlFor="img2">Image 2:</label>
          <input
            type="file"
            value={input.img2}
            id="img2"
            name="img2"
            placeholder="img2"
            onChange={(e) => handleChange(e)}
          />
          {errors.img2 && <p>{errors.img2}</p>}
        </div>
        <div>
          <label htmlFor="img3">Image 3:</label>
          <input
            type="file"
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
            type="file"
            value={input.img4}
            id="img4"
            name="img4"
            placeholder="img"
            onChange={(e) => handleChange(e)}
          />
          {errors.img4 && <p>{errors.img4}</p>}
        </div>
        <div>
          <label htmlFor="price_min">*Price min:</label>
          <input
            type="number"
            value={input.price_min}
            id="price_min"
            name="price_min"
            placeholder="price min"
            required
            onChange={(e) => handleChange(e)}
          />
          {errors.price_min && <p>{errors.price_min}</p>}
        </div>
        <div>
          <label htmlFor="price_max">*Price max:</label>
          <input
            type="number"
            value={input.price_max}
            id="price_max"
            name="weight_min"
            placeholder="price max"
            required
            onChange={(e) => handleChange(e)}
          />
          {errors.price_max && <p>{errors.price_max}</p>}
        </div>
        <div>
          <label htmlFor="promotion">Promotion:</label>
          <input
            type="text"
            value={input.comment}
            id="promotion"
            name="promotion"
            placeholder="promotion"
            onChange={(e) => handleChange(e)}
          />
          {errors.promotion && <p>{errors.promotion}</p>}
        </div>
        <div>
          <label htmlFor="permitted">Permitted:</label>
          <input
            type="text"
            value={input.comment}
            id="permitted"
            name="permitted"
            placeholder="permitted"
            onChange={(e) => handleChange(e)}
          />
          {errors.permitted && <p>{errors.permitted}</p>}
        </div>
        <div>
          <label htmlFor="notPermitted">Not permitted:</label>
          <input
            type="text"
            value={input.notPermitted}
            id="notPermitted"
            name="notPermitted"
            placeholder="not permitted"
            onChange={(e) => handleChange(e)}
          />
          {errors.notPermitted && <p>{errors.notPermitted}</p>}
        </div>
      </form>
    </div>
  );
}

export default AddEvent;
