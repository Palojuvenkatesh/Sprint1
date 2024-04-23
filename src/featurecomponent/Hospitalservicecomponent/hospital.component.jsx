import './hospital.component.css';

import service from "../../../src/Assests/H-service.jpg";

import childhos from "../../../src/Assests/childhos.webp";
import ihospital from "../../../src/Assests/i_hospitals.webp";
import ienthospital from "../../Assests/i_enthospitals.webp";
import ieyehosiptal from "../../Assests/i_eyehospitals.webp";
import imaternity from "../../Assests/i_maternityhospitals.webp";
import imental from "../../Assests/i_mentalhospitals.webp";
import imultispeciality from "../../Assests/i_multispecialityhospitals.webp";
import iprivate from "../../Assests/i_privatehospitals.webp";
import ipublic from "../../Assests/i_publichospitals.webp";
import { Link } from 'react-router-dom';

import SearchBarr from '../../commoncomponent/Searchbar/searchbar';

import BookData from '../../Data.json';

export function Hospitalcomponent() {
    return (
        <div>
           
            <div>
                <img className='hosptial-img' src={service}></img>
            </div>
            <div>

            {/* <SearchBarr placeholder="Enter a Book Name..." data={BookData} ></SearchBarr> */}
                <div class="search-container">

                    <input
                     type="text" id="search-input" placeholder="Search All Category" 
                     
                     />
                     

                </div>
                <br></br>
                <br></br>
                <div className='container'>
                    <div className='row'>
                        <div className='mt-2  col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded '>
                                <a href='/hosptials'>
                                <img className='chilhos' src={ihospital}></img> 
                                <Link to="/hospitals-services">
                                <p className='services-heading'> Hosptials</p>
                                </Link>
                                
                            
                                </a>
                                </div>
                            
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4 '>
                            <div className='box-1 bg-white rounded'>
                                <a href='/Children'>
                                <img className='chilhos' src={childhos}></img> 
                                <p className='services-heading'>Childrens Hospital</p>
                                </a>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                            <img className='chilhos' src={ienthospital}></img> 
                                <p className='services-heading'> ENT Hospitals</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                            <img className='chilhos' src={ieyehosiptal}></img> 
                                <p className='services-heading'>Eyes Hospitals</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                            <img className='chilhos' src={imaternity}></img> 
                                <p className='services-heading'> Maternity Hospital</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                            <img className='chilhos' src={imental}></img> 
                                <p className='services-heading'> Mental Hospitals</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                            <img className='chilhos' src={imultispeciality}></img> 
                                <p className='services-heading'>Multispeciality Hospitals</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                            <img className='chilhos' src={iprivate}></img> 
                                <p className='services-heading'> Private Hospital</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                            <img className='chilhos' src={ipublic}></img> 
                                <p className='services-heading'>Public Hospitals</p>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    )
}