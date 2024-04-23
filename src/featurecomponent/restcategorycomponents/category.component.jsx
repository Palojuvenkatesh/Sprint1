import { Link } from 'react-router-dom';
import restcategory from '../../Assests/restcategory.jpg';
import './category.component.css';

export function Categoryservice(){
    return(
        <div>
            <div>
                <img className='restcategory' src={restcategory}></img>
            </div>
            <br></br>
            <br></br>
            <div className='container'>
                    <div className='row'>
                        <div className='mt-2  col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded '>
                                <Link to='/Aagri-resturant-service'><p className='services-headings'> Aagri Resturant</p></Link>
                                
                                
                            </div>
                            
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4 '>
                            <div className='box-1 bg-white rounded'>    
                                <p className='services-headings-afghani'>Afghani Resturant</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                            
                                <p className='services-headings-african'> African Resturant</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                            
                                <p className='services-headings-american'>American Resturant</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                            
                                <p className='services-headings-andalusian'> Andalusian Resturants</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                            
                                <p className='services-headings-andhra'> Andhra Resturants</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                           
                                <p className='services-headings-arabic'>Arabic resturants</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                            
                                <p className='services-headings-agentinian'> Agrentinian Resturants</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                          
                                <p className='services-headings-armenian'>Armenian Resturants</p>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    )
}