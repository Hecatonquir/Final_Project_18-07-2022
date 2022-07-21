import { React, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../Redux/Actions/getDetails";
import Loader from "./Loader.jsx";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
   
    dispatch(getDetail(id));
  }, []);

  const event = useSelector((state) => state.eventDetail);

  return (
    <div>
      {event[0] ? 
        <div>
          <Link to="/">
            <button>Back</button>
          </Link>
          
          <h1>{event[0].Name}</h1>
          
          <p>
            {event[0].City} {event[0].Location}
          </p>
          <p>{event[0].Price}</p>
         
          <div>
            <img src={event[0].Image} alt={event.Name} />
            <img src={event.Image} alt={event.Name} />
            <img src={event.Image} alt={event.Name} />
            <img src={event.Image} alt={event.Name} />
          </div>
          </div>
       : (
        <div>
           <Link to="/">
            <button>Back</button>
          </Link>
          <Loader/>
          </div>
      )}
    </div>
  );
}
