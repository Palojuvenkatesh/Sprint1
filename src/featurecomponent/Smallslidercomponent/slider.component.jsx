// SliderComponent.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import totur from "../../Assests/totur.jpg";
import smallslide1 from "../../Assests/Smallslide1.jpg";
import smallslide2 from "../../Assests/smallslide2.jpg";
import smallslide3 from "../../Assests/smallslide3.jpg";
import smallslide4 from "../../Assests/smallslide4.jpg";
import hwslide1 from "../../Assests/hwslide1.jpg";
import hwslide2 from "../../Assests/hwslide2.jpg";
import hwslide3 from "../../Assests/hwslide3.jpg";
import hwslide4 from "../../Assests/hwslide4.jpg";
import './slider.component.css';
import { Link } from 'react-router-dom';

const SliderComponent = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
           
            <div >
                <br></br>
                <h2 className='hyd_title'>Education and Training</h2>
            
                <div className='education-main-container'>
                    {/* <h4 style={{ marginLeft: '50px' }}>Browse Hyderabad Famous Food</h4> */}
                    <br></br>
                    <Slider {...settings} style={{ marginLeft: '20px' }}>
                        <div>
                            <Link to="" style={{ textDecoration: 'none' }}>
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                    <div className="card mx-3 card--1" style={{ height: '350px', width: '350px' }}>
                                        <img className="card-img-top" src={smallslide1} alt="tutor" />
                                        <div className="card-body">
                                            <h5 className="card-titles" style={{ textAlign: "center" }}>Coaching </h5>
                                            <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card--1" style={{ height: '350px', width: '350px' }}>
                                    <img className="card-img-top" src={smallslide2} alt="tutor" />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Job Training</h5>
                                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to="/haleem_restaurents" style={{ textDecoration: 'none' }}>
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                    <div className="card mx-3 card--1" style={{ height: '350px', width: '350px' }}>
                                        <img className="card-img-top" src={smallslide3} alt="tutor" />
                                        <div className="card-body">
                                            <h5 className="card-titles" style={{ textAlign: "center" }}>Education</h5>
                                            <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card--1" style={{ height: '350px', width: '350px' }}>
                                    <img className="card-img-top" src={smallslide4} alt="tutor" style={{ height: '500px' }} />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Overseas</h5>
                                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card--1" style={{ height: '350px', width: '350px' }}>
                                    <img className="card-img-top" src={hwslide1} alt="tutor" />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Yoga</h5>
                                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card--1" style={{ height: '350px', width: '350px' }}>
                                    <img className="card-img-top" src={hwslide2} alt="tutor" />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Gym</h5>
                                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card--1" style={{ height: '350px', width: '350px' }}>
                                    <img className="card-img-top" src={hwslide3} alt="tutor" style={{ height: '138px' }} />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Yoga</h5>
                                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                                <div className="card mx-3 card--1" style={{ height: '350px', width: '350px' }}>
                                    <img className="card-img-top" src={hwslide4} alt="tutor" />
                                    <div className="card-body">
                                        <h5 className="card-titles" style={{ textAlign: "center" }}>Clinic</h5>
                                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </Slider>

                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default SliderComponent;
