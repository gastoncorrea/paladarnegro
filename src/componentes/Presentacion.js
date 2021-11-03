import React, { Fragment } from "react";
import { Carousel, Card, Button, Badge } from "react-bootstrap";

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
      <section className="my-5 row container mx-auto">
        <div className="col-sm-12 col-md-3">
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "colita_de_cuadril_canva.png"}
            />
            <Card.Body>
              <Card.Title>Colita de Cuadril</Card.Title>
              <Card.Text>
                Delicioso corte, jugoso y Suave
                <div>
                  <Badge pill bg="warning" text="danger">
                    <p>$1000</p>
                  </Badge>
                </div>
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3">
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "colita_de_cuadril_canva.png"}
            />
            <Card.Body>
              <Card.Title>Colita de Cuadril</Card.Title>
              <Card.Text>Delicioso corte, jugoso y suave</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3">
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "colita_de_cuadril_canva.png"}
            />
            <Card.Body>
              <Card.Title>Colita de Cuadril</Card.Title>
              <Card.Text>Delicioso corte, jugoso y suave</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3">
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "colita_de_cuadril_canva.png"}
              className="w-100"
            />
            <Card.Body>
              <Card.Title>Colita de Cuadril</Card.Title>
              <Card.Text>Delicioso corte, jugoso y suave</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </div>
      </section>
    </Fragment>
  );
};

export default Presentacion;
