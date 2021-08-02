import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./WomensSlider.css";
import WomenImg from "../assets/womensCategories/women-large.jpg.webp";
import Cloth1 from "../assets/womensCategories/cloth1.webp"
import Slider from "react-slick";

function WomensSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
     
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-5">
      <Container className="px-5" fluid>
        <Row>
          <Col style={{height: "680px"}} lg={3}>
            <div>
              <Card className="bg-dark text-white border-0 h-100 ">
                <Card.Img
                  src={WomenImg}
                  alt="Card image"
                  className="rounded-0 fluid h-100"
                />
                <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                  <div className="bg-white d-inline-block px-3 py-2 rounded-1">
                    <h3 className="m-0 text-dark">Kid's</h3>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
          <Col
            className="pt-5  d-flex flex-column justify-content-center align-items-center"
            lg={9}
          >
            <ul class="nav filter-items">
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  <p>Clothing</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <p>HandBag</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <p>Shoes</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  <p>Accessories</p>
                </a>
              </li>
            </ul>
            <div className="w-100 px-5">
              <Slider className='women-slider' {...settings}>
                <div className='px-3'>
                  <Card >
                    <Card.Img variant="top" src={Cloth1} />
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                      <Card.Text className="text-muted">
                        Coat
                      </Card.Text>
                      <Card.Title>Pure Pineapple</Card.Title>
                      <Card.Text className='price-tag'>
                        $34.00
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                </div>
                <div className='px-3'>
                <Card >
                    <Card.Img variant="top" src={Cloth1} />
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                      <Card.Text className="text-muted">
                        Coat
                      </Card.Text>
                      <Card.Title>Pure Pineapple</Card.Title>
                      <Card.Text className='price-tag'>
                        $34.00
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                </div>
                <div className='px-3'>
                <Card >
                    <Card.Img variant="top" src={Cloth1} />
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                      <Card.Text className="text-muted">
                        Coat
                      </Card.Text>
                      <Card.Title>Pure Pineapple</Card.Title>
                      <Card.Text className='price-tag'>
                        $34.00
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                </div>
                <div className='px-3'>
                <Card >
                    <Card.Img variant="top" src={Cloth1} />
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                      <Card.Text className="text-muted">
                        Coat
                      </Card.Text>
                      <Card.Title>Pure Pineapple</Card.Title>
                      <Card.Text className='price-tag'>
                        $34.00
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                </div>
                <div className='px-3'>
                <Card >
                    <Card.Img variant="top" src={Cloth1} />
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                      <Card.Text className="text-muted">
                        Coat
                      </Card.Text>
                      <Card.Title>Pure Pineapple</Card.Title>
                      <Card.Text className='price-tag'>
                        $34.00
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WomensSlider;
