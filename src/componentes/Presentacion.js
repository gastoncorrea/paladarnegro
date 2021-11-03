import React, { Fragment } from "react";
import {Carousel} from 'react-bootstrap';
const Presentacion = () => {
  return (
    <Fragment>
      <section class="text-center my-5">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL+'tomahawk_y_tbone.png'}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </section>
    </Fragment>
  );
};

export default Presentacion;
