import './card.component.css';
import totur from "../../Assests/totur.jpg";
import totur1 from "../../Assests/toturs1.jpg";
import totur2 from "../../Assests/toturs2.jpg";
import totur3 from "../../Assests/toturs3.jpg";
import rest1 from "../../Assests/rest1.jpg";
import rest2 from "../../Assests/rest2.jpg";
import rest3 from "../../Assests/rest3.jpg";
import rest4 from "../../Assests/rest4.jpg";

import { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Cardcomponent() {
  const [selectedCategory, setSelectedCategory] = useState('tutor');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = {
    tutor: [
      {
        imageUrl: totur,
        heading4: 'English Tutor',
        heading6: 'Abu Dhabi',
        atag: 'View Profile',
      },
      {
        imageUrl: totur1,
        heading4: 'Hindi Tutor',
        heading6: 'Dubai',
        atag: 'View Profile',
      },
      {
        imageUrl: totur2,
        heading4: 'Arabic Tutor',
        heading6: 'Ajman',
        atag: 'View Profile',
      },
      {
        imageUrl: totur3,
        heading4: 'Bengali Tutor',
        heading6: 'Dubai',
        atag: 'View Profile',
      },
      {
        imageUrl: rest1,
        heading4: 'Verde Beach Dubai',
        heading6: 'Dubai',
        atag: 'View Restaurant',
      },
      {
        imageUrl: rest2,
        heading4: 'Zenon',
        heading6: 'Dubai',
        atag: 'View Restaurant',
      },
      {
        imageUrl: rest3,
        heading4: 'Lena',
        heading6: 'Order Online',
        atag: 'View Restaurant',
      },
      {
        imageUrl: rest4,
        heading4: 'Smoki Moto',
        heading6: 'Dubai',
        atag: 'View Restaurant',
      },

    ]
    
  };


  useEffect(() => {

    const defaultItems = categories[selectedCategory];

  }, [selectedCategory]);


  const [rating, setRating] = useState(0);



  const handleRatingClick = (value) => {
    setRating(value);
  };
  return (
   
      <div>
        <h3 className="mpcategories-heading">Explore Directory Catergory</h3>
        <div className="mt-5 directory-catergory">
        
          <div style={{marginLeft:'23px'}}>
          <Row className="mt-5" style={{width:'100%'}}>
            {categories[selectedCategory].map((item, index) => (
              <Col key={index} xs={12} md={6} lg={3} className="mb-3">
                <div className="card ">

                  <img src={item.imageUrl} className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title" style={{ textAlign: "center" }}>{item.heading4}</h4>
                    <h6 className="card-text mt-4" style={{ textAlign: "center" }}>{item.heading6}</h6>
                    <a href="/restaurant" className="btn btn-primary cards_button " style={{ marginLeft: '36%' , color:'    color: #e73a34;' }}>{item.atag}</a>
                  </div>

                  <div style={{ textAlign: 'center', marginLeft: '0px' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        onClick={() => handleRatingClick(star)}
                        style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                      >
                        ★ 
                      </span>
                    ))}
                    <p style={{ display: 'none' }}>Selected rating: {rating}</p>
                  </div>

                </div>


              </Col>
            ))}

          </Row>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    
  )
}