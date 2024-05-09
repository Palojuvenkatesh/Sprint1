import './service.component.css';
import education from '../../Assests/education.jpeg';
import resturantlogo from '../../Assests/restaurantlogo.jpeg';
import hospitallogo from '../../Assests/Hospitallogo.jpeg';
import hotellogo from '../../Assests/Hotellogo.jpeg';
import gymlogo from '../../Assests/Gymlogo.jpeg';
import drivinglogo from '../../Assests/drivinglogo.jpg';
import plumberlogo from '../../Assests/plumberlogo.jpg';
import butylogo from '../../Assests/beautylogo.jpg';
import contractlogo from '../../Assests/contractorlogo.jpg';
import weddinglogo from '../../Assests/weddinglogo.jpeg';
import dentist from '../../Assests/dentistlogo.jpg';
import hostellogo from '../../Assests/hostellogo.jpg';
import { Link } from 'react-router-dom';
import housecleanig from '../../Assests/house-cleaning.jpg';

export function Servicecomponent() {
    return (
        <div>
            <img className='house-cleaning-image' src={housecleanig}></img>
            <div>
                <h1 style={{ fontSize: "33px", textAlign: "center" }} className='mt-5'>Most Popular Categories</h1>
                <br></br>
                <div style={{ marginLeft: "150px" }}>
                    <div className='container'>

                        <div className='row ' style={{ width: "100%" }}>

                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  ' style={{ alignItems: "center" }}>
                                <Link to="/resturant-services" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img className="restaurant" src={resturantlogo}></img>
                                    
                                    <h6 style={{ marginLeft: "10px", fontFamily: " sans-serif" }}>Restaurant</h6>
                                </Link>
                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <Link to='/beauty' style={{ textDecoration: 'none', color: 'black' }}>
                                    <img className="restaurant" src={butylogo}></img>
                                    <h6 style={{ marginLeft: "25px", fontFamily: " sans-serif" }}>Beauty</h6>
                                </Link>
                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <Link to="/hotel_main" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img className="restaurant" src={hotellogo}></img>
                                    <h6 style={{ marginLeft: "27px", fontFamily: " sans-serif" }}>Hotel</h6>
                                </Link>
                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <img className="restaurant" src={contractlogo}></img>
                                <h6 style={{ marginLeft: "10px", fontFamily: " sans-serif" }}>Contarctor</h6>
                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <Link to="/tutors"  style={{ textDecoration: 'none', color: 'black' }}>
                                <img className="restaurant" src={education}></img>
                                <h6 style={{ marginLeft: "25px", fontFamily: " sans-serif" }}>Tutors</h6>
                                </Link>
                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2'>
                                <img className="restaurant" src={weddinglogo}></img>
                                <h6 style={{ marginLeft: "5px", fontFamily: " sans-serif" }}>EventPlanner</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: "150px" }}>
                    <div className='container'>

                        <div className='row ' style={{ width: "100%" }}>

                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  ' style={{ alignItems: "center" }}>
                                <img className="restaurant" src={weddinglogo}></img>
                                <h6 style={{ marginLeft: "-15px", fontFamily: " sans-serif" }}>Wedding planner</h6>

                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <Link to="/bank" style={{ textDecoration: 'none', color: 'black' }}>
                                <img className="restaurant" src={gymlogo}></img>
                                <h6 style={{ marginLeft: "27px", fontFamily: " sans-serif" }}>Gym</h6>
                                </Link>
                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <Link to='/hospital-service' style={{ textDecoration: 'none', color: 'black' }}>
                                    <img className="restaurant" src={hospitallogo}></img>
                                    <h6 style={{ marginLeft: "15px", fontFamily: " sans-serif" }}>Hospitals</h6>
                                </Link>
                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                            <Link to='/atm' style={{ textDecoration: 'none', color: 'black' }}>
                                <img className="restaurant" src={dentist}></img>
                                <h6 style={{ marginLeft: "25px", fontFamily: " sans-serif" }}>Dentist</h6>
                                </Link>  
                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
                                <img className="restaurant" src={hostellogo}></img>
                                <h6 style={{ marginLeft: "25px", fontFamily: " sans-serif" }}>Hostel</h6>

                            </div>
                            <div className='mt-4 col-sm-6 col-md-6 col-lg-2'>
                                <img className="restaurant" src={plumberlogo }></img>
                                <h6 style={{ marginLeft: "20px", fontFamily: " sans-serif" }}>Plumber</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>

        </div>
    )
}