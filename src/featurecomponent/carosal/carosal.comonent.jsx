import './carosal.component.css';
import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import slidee1 from '../../Assests/slidee1.jpg';
import slide1 from '../../Assests/slide1.jpg';
import slide2 from '../../Assests/slide2.jpg';
import slide3 from '../../Assests/slide3.jpg';
import slide4 from '../../Assests/slide4.jpg';

export function CarosalComponent() {
    return (
        <div>
             <div id="carouselExampleCaptions" className="carousel slide" >
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner" >
                            <div className="carousel-item active">
                                <img src={slide4} className="d-block imgs" align='center' style={{ width: '100%', height: '60vh' }} alt="..."></img>
                            </div>

                            <div className="carousel-item">
                                <img src={slidee1} className="d-block imgs" align='center' style={{ width: '100%', height: '60vh' }} alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src={slide3} className="d-block imgs" align='center' style={{ width: '100%', height: '60vh' }} alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src={slide2} className="d-block imgs" align='center' style={{ width: '100%', height: '60vh' }} alt="..."></img>

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="Next">
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>  &nbsp; &nbsp; &nbsp;

        </div>
    )
}