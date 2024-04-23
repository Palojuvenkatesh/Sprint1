import './service.component.css';

import agrirest1 from '../../Assests/agrirest1.jpg';
import agrirest2 from '../../Assests/agrirest2.jpg';
import agrirest3 from '../../Assests/agrirest3.jpg';
import agrirest4 from '../../Assests/agrirest4.jpg';

import hosemerits from "../../Assests/hos-emerits.jpg";

import hosiranian from "../../Assests/hos-iranian.jpg"
import hoszuleka from "../../Assests/hos-zulekha.jpg";
import React from 'react';

export function Aagriresturant() {
  return (
    <div>

     
      <div>
        <h2 className='top-hospital-main-heading'>Best Aagri Restaurants in Dubai - Order Food Online</h2>
      </div>
      <div className="containerr">
        <div  >
          <img className="image-1" src={agrirest1} width="300px" height="200px" alt="Dubai" />
        </div>
        <div className="text">
          <h1 className='roy-head1'>Surbhi Malvani Kitchen & Bar</h1>
          <p style={{ cursor: 'pointer' }}>
            <b>Trust</b> <a href="#">Verified</a> <button className='top-search' style={{ cursor: 'pointer' }}>Top Search</button>
          </p>
          <p>village Navi Dubai Vashi, Navi Dubai.<b>"Immediate availability"</b> 10 suggestions</p>
          {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
          <br />
          <button className='shownumber-1' style={{ backgroundColor: 'green', color: 'aliceblue', cursor: 'pointer' }}>
            <b>Show Number</b>
          </button>
          <button className='bookappointment-1' style={{ backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}>
            <b>Book Appointment</b>
          </button>
          <button className='check-1' style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Chat</button>
        </div>
      </div>
      <br></br>
      <div className="containerr">
        <div >
          <img className="image-1" src={agrirest2} width="300px" height="200px" alt="Dubai" />
        </div>
        <div className="text">
          <h1>Indi Go Spice</h1>
          <p style={{ cursor: 'pointer' }}>
            <b>Trust</b> <a href="#">Verified</a> <button className='top-search' style={{ cursor: 'pointer' }}>Top Search</button>
          </p>
          <p>village Navi Dubai Vashi, Navi Dubai.<b>"Immediate availability"</b> 10 suggestions</p>
          {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
          <br />
          <button className='shownumber-1' style={{ backgroundColor: 'green', color: 'aliceblue', cursor: 'pointer' }}>
            <b>Show Number</b>
          </button>
          <button className='bookappointment-1' style={{ backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}>
            <b>Book Appointment</b>
          </button>
          <button className='check-1' style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Chat</button>
        </div>
      </div>
      <br></br>
      <div className="containerr">
        <div >
          <img className="image-1" src={agrirest3} width="300px" height="200px" alt="Dubai" />
        </div>
        <div className="text">
          <h1>Mrunal Family Restaurant</h1>
          <p style={{ cursor: 'pointer' }}>
            <b>Trust</b> <a href="#">Verified</a> <button className='top-search' style={{ cursor: 'pointer' }}>Top Search</button>
          </p>
          <p>village Navi duabi Vashi, Navi dubai.<b>"Immediate availability"</b> 10 suggestions</p>
          {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
          <br />
          <button className='shownumber-1' style={{ backgroundColor: 'green', color: 'aliceblue', cursor: 'pointer' }}>
            <b>Show Number</b>
          </button>
          <button className='bookappointment-1' style={{ backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}>
            <b>Book Appointment</b>
          </button>
          <button className='check-1' style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Chat</button>
        </div>
      </div>
      <br></br>
      <div className="containerr">
        <div >
          <img className="image-1" src={agrirest4} width="300px" height="200px" alt="Dubai" />
        </div>
        <div className="text">
          <h1>Joshis Kitchen</h1>
          <p style={{ cursor: 'pointer' }}>
            <b>Trust</b> <a href="#">Verified</a> <button className='top-search' style={{ cursor: 'pointer' }}>Top Search</button>
          </p>
          <p>village Navi dubai Vashi, Navi duabi.<b>"Immediate availability"</b> 10 suggestions</p>
          {/* <button className='hos-button' style={{ marginBottom: '5px', cursor: 'pointer' }}>Hospitals</button> */}
          <br />
          <button className='shownumber-1' style={{ backgroundColor: 'green', color: 'aliceblue', cursor: 'pointer' }}>
            <b>Show Number</b>
          </button>
          <button className='bookappointment-1' style={{ backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}>
            <b>Book Appointment</b>
          </button>
          <button className='check-1' style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer' }}>Chat</button>
        </div>
      </div>
    </div>
  )
}
