import './restaurntservice.css';
import restuarnt1 from '../../Assests/restaurnt1.jpg';
import restcard1 from '../../Assests/restcard1.png';
import restcard2 from '../../Assests/restcard2.jpg';
import restcard3 from '../../Assests/restcard3.jpg';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import totur from "../../Assests/totur.jpg";
import smallslide1 from "../../Assests/Smallslide1.jpg";
import smallslide2 from "../../Assests/smallslide2.jpg";
import smallslide3 from "../../Assests/smallslide3.jpg";
import smallslide4 from "../../Assests/smallslide4.jpg";


import restcards1 from "../../Assests/restcards1.jpg";
import restcards2 from "../../Assests/restcards2.webp";
import restcards3 from "../../Assests/restcards3.webp";
import restcards4 from "../../Assests/restcards4.webp";
import { Link } from 'react-router-dom';

export function Restaurntservice() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        slideMargin: 10 
    };
    return (
        <div className='main-containerr'>
            <div>
                <img className='resimg' src={restuarnt1}></img>
            </div>

            <div className='cardsq1'>
                <div className='container1'>
                    <img className='restcard1' src={restcard1}></img>
                    <h1 >Book A Table</h1>
                </div>
                <div className='container2'>
                <img className='restcard1' src={restcard2}></img>
                    <h1>What's  Trending?</h1>
                </div>
                <div className='container3'>
                <img className='restcard1' src={restcard3}></img>
                    <h1>Order Food</h1>
                </div>
            </div>
<br></br>
<br></br>

            <div className='small-slider-containers'>
           
            <Slider {...settings}>
            
            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="card mx-3 card-1"> {/* Add margin between cards */}
                    <img className="card-img-top" src={restcards1} alt="tutor" />
                    <div className="card-body">
                        <h4 className="card-titles" style={{ textAlign: "center" }}>Indian Falvours</h4>
                       <h6 >-Pure veg</h6>
                       <h6>-Dhaba</h6>
                       <h6>-Biryani</h6>
                       <h6>-North Indian</h6>
                        
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="card mx-3 card-2"> {/* Add margin between cards */}
                    <img className="card-img-top" src={restcards2} alt="tutor" />
                    <div className="card-body">
                        <h4 className="card-titles" style={{ textAlign: "center" }}> Global Cusisines</h4>
                       <h6>- Japanese</h6>
                       <h6>- Continental</h6>
                       <h6>- Italian</h6>
                       <h6>- Chinese</h6>
                        
                    </div>
                </div>
            </div><div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="card mx-3"> {/* Add margin between cards */}
                    <img className="card-img-top" src={restcards3} alt="tutor" />
                    <div className="card-body">
                        <h4 className="card-titles" style={{ textAlign: "center" }}>Sweet Tooth</h4>
                        <h6>- Cake Shops</h6>
                        <h6>- Desserts</h6>
                        <h6>- Donut Outlets</h6>
                        <h6>- Donut Outlets</h6>
                        
                    </div>
                </div>
            </div><div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="card mx-3"> {/* Add margin between cards */}
                    <img className="card-img-top" src={restcards4} alt="tutor" />
                    <div className="card-body">
                        <h4 className="card-titles" style={{ textAlign: "center" }}>Quick Bites</h4>
                      
                        <h6>- Fast Food</h6>
                        <h6>- Bakeries</h6>
                        <h6>- Coffee Shops</h6>
                        <h6>- Pizza Outlets</h6>
                    </div>
                </div>
            </div>
            
            {/* Add more slides as needed */}
        </Slider>
        </div>
        <Link to='/resturant-category-service'>
        <button className='buttons'>View All Categories</button>
        </Link>

        
 
        </div>
    )
}