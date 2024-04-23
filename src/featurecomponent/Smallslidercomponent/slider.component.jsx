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

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        slideMargin: 10 
    };

    return (
        
        <div className='small-slider-container'>
            <h1 className='education-training-heading'>
                Education and Training
            </h1>
            <Slider {...settings}>
            
            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="card mx-3 card-1"> {/* Add margin between cards */}
                    <img className="card-img-top" src={smallslide1} alt="tutor" />
                    <div className="card-body">
                        <h4 className="card-title" style={{ textAlign: "center" }}>Entrance Exam Coaching</h4>
                        
                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="card mx-3 card-2"> {/* Add margin between cards */}
                    <img className="card-img-top" src={smallslide2} alt="tutor" />
                    <div className="card-body">
                        <h4 className="card-title" style={{ textAlign: "center" }}>Job Training</h4>
                       
                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                    </div>
                </div>
            </div><div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="card mx-3"> {/* Add margin between cards */}
                    <img className="card-img-top" src={smallslide3} alt="tutor" />
                    <div className="card-body">
                        <h4 className="card-title" style={{ textAlign: "center" }}>Distance Education</h4>
                        
                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                    </div>
                </div>
            </div><div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="card mx-3"> {/* Add margin between cards */}
                    <img className="card-img-top" src={smallslide4} alt="tutor" />
                    <div className="card-body">
                        <h4 className="card-title" style={{ textAlign: "center" }}>OverSeas Education</h4>
                      
                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                    </div>
                </div>
            </div>
            
            {/* Add more slides as needed */}
        </Slider>

        
        <h1 className='health-wellness-heading2'>
                Health & Wellness
            </h1>
            <Slider {...settings}>
            
            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="card mx-3 card-1"> {/* Add margin between cards */}
                    <img className="card-img-top" src={hwslide1} alt="tutor" />
                    <div className="card-body">
                        <h4 className="card-title" style={{ textAlign: "center" }}>Beauty Parlours</h4>
                       
                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="card mx-3 card-2"> {/* Add margin between cards */}
                    <img className="card-img-top" src={hwslide2} alt="tutor" />
                    <div className="card-body">
                        <h4 className="card-title" style={{ textAlign: "center" }}>Gyms</h4>
                        
                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                    </div>
                </div>
            </div><div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="card mx-3"> {/* Add margin between cards */}
                    <img className="card-img-top" src={hwslide3} alt="tutor" />
                    <div className="card-body">
                        <h4 className="card-title" style={{ textAlign: "center" }}>Yoga Classes</h4>
                        
                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                    </div>
                </div>
            </div><div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="card mx-3"> {/* Add margin between cards */}
                    <img className="card-img-top" src={hwslide4} alt="tutor" />
                    <div className="card-body">
                        <h4 className="card-title" style={{ textAlign: "center" }}>Skincare & Treatment</h4>
                        
                        <a href="#" className="btn btn-primary cards_button buutton1">View Profile</a>
                    </div>
                </div>
            </div>
            
            {/* Add more slides as needed */}
        </Slider>
        </div>
        
    );
}

export default SliderComponent;
