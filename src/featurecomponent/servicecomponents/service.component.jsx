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
            <div>
                <img className='house-cleaning-image' src={housecleanig}></img>
                <div className='Main-container'>
                    {/* <h1 className='mpcategories-heading '>Most Popular Categories</h1> */}
                    <br></br>
                    <div className='container'>
                        <div className='row'>
                            <div className='mt-2 col-2'>
                                <div className='box-1 bg-white'>
                                    
                                    <p className='resutrant-heading'> <img className='tlogo1' src={resturantlogo}></img></p>
                                    <Link to="/resturant-services"><div className='rest'>Resutrants</div></Link>
                                    
                                </div>
                            </div>
                            <div className='mt-2 col-2 '>
                                <div className='box-1 bg-white'>

                                    <p className='resutrant-heading'> <img className='tlogo1' src={hospitallogo}></img></p>
                                    <Link to="/hospital-service"><div className='hosp'>Hospital</div></Link>

                                    
                                </div>
                            </div>
                            <div className='mt-2 col-2'>
                                <div className='box-1 bg-white'>
                                    <p className='resutrant-heading'> <img className='tlogo1' src={hotellogo}></img></p>
                                    <div className='hotell'>Hotels</div>
                                </div>
                            </div>

                            <div className='mt-2 col-2 '>
                                <div className='box-1 bg-white'>
                                    <p className='resutrant-heading'> <img className='tlogo1' src={education}></img></p>
                                    <div className='educat'> Education</div>
                                </div>
                            </div>
                            <div className='mt-2 col-2 '>
                                <div className='box-1 bg-white'>
                                    <p className='resutrant-heading'> <img className='tlogo1' src={gymlogo}></img></p>
                                    <div className='gymm'>Gym</div>
                                </div>
                            </div>
                            <div className='mt-2 col-2 '>
                                <div className='box-1 bg-white'>
                                    <p className='resutrant-heading'> <img className='tlogo1' src={dentist}></img></p>
                                    <div className='dentistss'>Dentists</div>
                                </div>
                            </div>
                            <div className='mt-4 col-2 '>
                                <div className='box-1 bg-white'>
                                    <p className='resutrant-heading'> <img className='tlogo1' src={drivinglogo}></img></p>
                                    <div className='drivschool'>Driving Schools</div>
                                </div>
                            </div>
                            <div className='mt-4 col-2 '>
                                <div className='box-1 bg-white'>
                                    <p className='resutrant-heading'> <img className='tlogo1' src={butylogo}></img></p>
                                    <div className='beautyy'>Beauty Spa</div>
                                </div>
                            </div>
                            <div className='mt-4 col-2 '>
                                <div className='box-1 bg-white'>
                                    <p className='resutrant-heading'> <img className='tlogo1' src={contractlogo}></img></p>
                                    <div className='contract'>Contractors</div>
                                </div>
                            </div>
                            <div className='mt-4 col-2 '>
                                <div className='box-1 bg-white'>
                                    <p className='resutrant-heading'> <img className='tlogo1' src={hostellogo}></img></p>
                                    <div className='hostelss'>PG/Hostels</div>
                                </div>
                            </div>

                            <div className='mt-4 col-2 '>
                                <div className='box-1 bg-white'>
                                    <p className='resutrant-heading'> <img className='tlogo1' src={weddinglogo}></img></p>
                                    <div className='weddingss'>Wedding Planning</div>
                                </div>
                            </div>

                            <div className='mt-4 col-2 '>
                                <div className='box-1 bg-white'>
                                    <p className='resutrant-heading'> <img className='tlogo1' src={plumberlogo}></img></p>
                                    <div className='plumberr'>Plumber</div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}