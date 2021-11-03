import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
const Presentacion = () => {
  return (
    <Fragment>
      <section class="text-center my-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "tomahawk_y_tbone.png"}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "entraña.png"}
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "osobuco.png"}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Probá lo Nuevo</h3>
              <p>Disfruta de nuestro atrevimiento</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </Fragment>
  );
};

export default Presentacion;
