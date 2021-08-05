import React from 'react'
import {Card} from 'react-bootstrap'
import Cloth1 from "../assets/womensCategories/cloth1.webp";
import { MdAddShoppingCart, MdExplore, MdFavoriteBorder } from "react-icons/md";
import './WomensSlider.css'

function CardTemplate() {
    return (
        <div>
            <Card className="border-0">
                    <div className="card-img w-100 h-100">
                      <Card.Img variant="top" src={Cloth1} />
                      <ul class="icon d-flex justify-content-center align-items-center w-100">
                        <li className="px-1">
                          <a href="#" className="first-item">
                            <MdAddShoppingCart />
                          </a>
                        </li>
                        <li className="px-1">
                          <a href="#" className="text-decoration-none px-3">
                            نگاه سریع
                          </a>
                        </li>
                        <li className="px-1">
                          <a href="#">
                            <MdExplore />
                          </a>
                        </li>
                      </ul>
                      <div className="favorite-icon-container">
                      <MdFavoriteBorder className="favorite-icon"/>
                      </div>
                    </div>
                    
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Text className="text-muted">کت</Card.Text>
                      <Card.Title>پولیور صورتی</Card.Title>
                      <Card.Text className="price-tag">۵۶،۰۰۰ تومان</Card.Text>
                    </Card.Body>
                  </Card>
        </div>
    )
}

export default CardTemplate
