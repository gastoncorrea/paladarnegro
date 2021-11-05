import React, { Fragment } from "react";
import { Carousel, Card, Button, Badge, Container } from "react-bootstrap";

const Presentacion = () => {
  return (
    <Fragment>
      <Container>
        <section class="text-center my-5 mt-2">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "img/tomahawk_y_tbone.png"}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "img/entraña.png"}
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "img/osobuco.png"}
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
          <div className="col-sm-12 col-md-3 my-3">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "img/colita_de_cuadril_canva.png"}
              />
              <Card.Body>
                <Card.Title>Colita de Cuadril</Card.Title>
                <Card.Text>
                  Delicioso corte, jugoso y Suave
                  <div className="d-flex align-item-center">
                    <span className="badge bg-warning text-dark my-2 me-2 ">
                      $1000
                    </span>
                    <p className="my-2">x KG</p>
                  </div>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-3 my-3">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "img/costilla2.png"}
              />
              <Card.Body>
                <Card.Title>Costilla</Card.Title>
                <Card.Text>
                  Delicioso corte, Sabroso
                  <div className="d-flex align-item-center">
                    <span className="badge bg-warning text-dark my-2 me-2 ">
                      $1000
                    </span>
                    <p className="my-2">x KG</p>
                  </div>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-3 my-3">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "img/entraña_individual.png"}
              />
              <Card.Body>
                <Card.Title>Entraña</Card.Title>
                <Card.Text>
                  Delicioso corte, jugoso y suave
                  <div className="d-flex align-item-center">
                    <span className="badge bg-warning text-dark my-2 me-2 ">
                      $1000
                    </span>
                    <p className="my-2">x KG</p>
                  </div>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-3 my-3">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "img/faldita2.jpg"}
                className="w-100"
              />
              <Card.Body>
                <Card.Title>Faldita</Card.Title>
                <Card.Text>
                  Delicioso corte, jugoso y suave
                  <div className="d-flex align-item-center">
                    <span className="badge bg-warning text-dark my-2 me-2 ">
                      $1000
                    </span>
                    <p className="my-2">x KG</p>
                  </div>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-3 my-3">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "img/osobuco3.jpg"}
              />
              <Card.Body>
                <Card.Title>Osobuco</Card.Title>
                <Card.Text>
                  Delicioso corte, jugoso y Suave
                  <div className="d-flex align-item-center">
                    <span className="badge bg-warning text-dark my-2 me-2 ">
                      $1000
                    </span>
                    <p className="my-2">x KG</p>
                  </div>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-3 my-3">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "img/picana.jpg"}
              />
              <Card.Body>
                <Card.Title>Picana</Card.Title>
                <Card.Text>
                  Delicioso corte, jugoso y suave
                  <div className="d-flex align-item-center">
                    <span className="badge bg-warning text-dark my-2 me-2 ">
                      $1000
                    </span>
                    <p className="my-2">x KG</p>
                  </div>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-3 my-3">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "img/queperi.jpg"}
              />
              <Card.Body>
                <Card.Title>Queperí</Card.Title>
                <Card.Text>
                  Delicioso corte, jugoso y suave
                  <div className="d-flex align-item-center">
                    <span className="badge bg-warning text-dark my-2 me-2 ">
                      $1000
                    </span>
                    <p className="my-2">x KG</p>
                  </div>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-3 my-3">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "img/t-bone.jpg"}
                className="w-100"
              />
              <Card.Body>
                <Card.Title>T-Bone</Card.Title>
                <Card.Text>
                  Delicioso corte, jugoso y suave
                  <div className="d-flex align-item-center">
                    <span className="badge bg-warning text-dark my-2 me-2 ">
                      $1000
                    </span>
                    <p className="my-2">x KG</p>
                  </div>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-3 my-3">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "img/tapa_asado.jpg"}
                className="w-100"
              />
              <Card.Body>
                <Card.Title>Tapa de asado</Card.Title>
                <Card.Text>
                  Delicioso corte, jugoso y suave
                  <div className="d-flex align-item-center">
                    <span className="badge bg-warning text-dark my-2 me-2 ">
                      $1000
                    </span>
                    <p className="my-2">x KG</p>
                  </div>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-3 my-3">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "img/tomahawk.jpg"}
                className="w-100"
              />
              <Card.Body>
                <Card.Title>Tomahawk</Card.Title>
                <Card.Text>
                  Delicioso corte, jugoso y suave
                  <div className="d-flex align-item-center">
                    <span className="badge bg-warning text-dark my-2 me-2 ">
                      $1000
                    </span>
                    <p className="my-2">x KG</p>
                  </div>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-3 my-3">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "img/vacio.jpeg"}
                className="w-100"
              />
              <Card.Body>
                <Card.Title>Vacio</Card.Title>
                <Card.Text>
                  Delicioso corte, jugoso y suave
                  <div className="d-flex align-item-center">
                    <span className="badge bg-warning text-dark my-2 me-2 ">
                      $1000
                    </span>
                    <p className="my-2">x KG</p>
                  </div>
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </div>
        </section>
      </Container>
    </Fragment>
  );
};

export default Presentacion;
