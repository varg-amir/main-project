import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CardTemplate from "../../components/CardTemplate";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import "./Categories.css";

function Categories() {
  return (
    <div>
      <NavBar />
      <div className="py-5 w-100">
        <Container>
          <Row>
            <Col
              className="d-flex flex-column align-items-right justify-content-start"
              lg={3}
            >
              <h4 className="pb-3">دسته بندی ها</h4>
              <ul class="list-group p-0 m-0 sub-category">
                <li class="list-group-item">
                  <a href="#">مردانه</a>
                </li>
                <li class="list-group-item">
                  <a href="#">زنانه</a>
                </li>
                <li class="list-group-item">
                  <a href="#">بچگانه</a>
                </li>
              </ul>

              <h4 className="pb-3 mt-4">برند ها</h4>
              <ul class="list-group p-0 m-0 sub-category">
                <li class="list-group-item">
                  <input
                    class="form-check-input ml-2"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  زارا
                </li>
                <li class="list-group-item">
                  <input
                    class="form-check-input ml-2"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  ال سی وایکیکی
                </li>
                <li class="list-group-item">
                  <input
                    class="form-check-input ml-2"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  آرمانی
                </li>
                <li class="list-group-item">
                  <input
                    class="form-check-input ml-2"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                  گوچی
                </li>
              </ul>

              <h4 className="pb-3 mt-4">قیمت</h4>

              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                step="0.5"
                id="customRange3"
              ></input>
            </Col>
            <Col lg={9}>
              <div className="w-50 d-flex mb-5">
                <select id="inputState" class="form-select ">
                  <option selected>مرتب سازی</option>
                  <option>...</option>
                </select>
                <select id="inputState" class="form-select mx-3">
                  <option selected>نمایش</option>
                  <option>...</option>
                </select>
              </div>
              <Row className="w-100">
                <Col md={6} lg={4}>
                  <CardTemplate />
                </Col>
                <Col md={6} lg={4}>
                  <CardTemplate />
                </Col>
                <Col md={6} lg={4}>
                  <CardTemplate />
                </Col>
                <Col md={6} lg={4}>
                  <CardTemplate />
                </Col>
                <Col md={6} lg={4}>
                  <CardTemplate />
                </Col>
                <Col md={6} lg={4}>
                  <CardTemplate />
                </Col>
                <Col md={6} lg={4}>
                  <CardTemplate />
                </Col>
                <Col md={6} lg={4}>
                  <CardTemplate />
                </Col>
                <Col md={6} lg={4}>
                  <CardTemplate />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Categories;
