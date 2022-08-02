import { React, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../Redux/Actions/getDetails";
// import { Box, Image } from '@chakra-ui/react';

export default function EventCarousel() {
  const { id } = useParams();
  const dispatch = useDispatch();
  var event = useSelector((state) => state.eventDetail);

  const styles = {
    prueba: {
      width: '40rem',
      height: '40rem'
    }
  }

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const CarouselItem = event[0].Image.map((im) => {
    if (im !== "")
      return (
            <Carousel.Item interval={2000}>
                <img src={im} alt={event[0].Name} className="d-block w-100" style={styles.prueba}/>
            </Carousel.Item>
      );
    else return "";
  });

  return (
    <Carousel  style={styles.prueba}>
        {CarouselItem}
    </Carousel>
  );
}

