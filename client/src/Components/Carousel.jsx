import React from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from '../Media/event1.jpeg'
import img2 from '../Media/event2.jpeg'
import img3 from '../Media/event3.jpeg'

export default function EventCarousel() {
  return (
    <Carousel style={{
        maxWidth: "100%",
        maxHeight: "450px",
      }}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{
            maxWidth: "100%",
            maxHeight: "450px",
          }}
        />
        <Carousel.Caption>
          <h3>First slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{
            maxWidth: "100%",
            maxHeight: "450px",
          }}
        />
        <Carousel.Caption>
          <h3>Second slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          style={{
            maxWidth: "100%",
            maxHeight: "450px",
          }}
        />
        <Carousel.Caption>
          <h3>Third slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}