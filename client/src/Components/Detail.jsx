import { React, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions/index";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const event = useSelector((state) => state.eventDetail);

  return (
    <div>
      {event ? (
        <div>
          <Link>
            <button>Back</button>
          </Link>
          <h1>{event.name}</h1>
          <p>
            {event.city} {event.location}
          </p>
          <p>{event.price}</p>
          <div>
            <img src={event.img} alt={event.name} />
            <img src={event.img} alt={event.name} />
            <img src={event.img} alt={event.name} />
            <img src={event.img} alt={event.name} />
          </div>
          <div>
            {event.map((e) => (
              <p key={e}>{e.promotion}</p>
            ))}
          </div>
          <ul>
            <p>Cosas permitidas</p>
            {event.map((e) => {
              return <li key={e}>{e.permitted}</li>;
            })}
          </ul>
          <ul>
            <p>Cosas no permitidas</p>
            {event.map((e) => {
              return <li key={e}>{e.notPermitted}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
