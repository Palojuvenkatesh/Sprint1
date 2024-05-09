import './hospitals.component.css';
import royalhospital from "../../Assests/dubairoyalityhospital.webp";
import hosemerits from "../../Assests/hos-emerits.jpg";
import hospic from "../../Assests/hos-pic.jpg";
import hosiranian from "../../Assests/hos-iranian.jpg"
import hoszuleka from "../../Assests/hos-zulekha.jpg";
import React from 'react';

export function Hosptial() {
  return (
    <div>
      <div>
        <img className='hospic' src={hospic}></img>
      </div>
        <div>
            <h2 className='top-hospital-main-heading mt-3' style={{textAlign:'center'}}>Top Hosptials in Dubai</h2>
        </div>

        <div className="containerr mt-3">
            <div  >
                <img className="image-1" src={royalhospital} width="300px" height="200px" alt="Dubai" />
            </div>
            <div className="text">
                <h1 className='roy-head1'>Dubai Hospital Royality</h1>
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
                <img className="image-1" src={hosemerits} width="300px" height="200px" alt="Dubai" />
            </div>
            <div className="text">
                <h1>The Best Emirates Royalty </h1>
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
                <img className="image-1" src={royalhospital} width="300px" height="200px" alt="Dubai" />
            </div>
            <div className="text">
                <h1>The Best Emirates Royalty </h1>
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
                <img className="image-1" src={hosiranian} width="300px" height="200px" alt="Dubai" />
            </div>
            <div className="text">
                <h1>iranian hosptial dubai </h1>
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
