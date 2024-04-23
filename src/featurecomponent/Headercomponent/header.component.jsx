import './header.component.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CarosalComponent } from '../carosal/carosal.comonent';
import SearchBarr from '../../commoncomponent/Searchbar/searchbar';

import BookData from '../../Data.json';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';



export function Headercomponent() {
    

    return (
        <div>
            <Navbar className='m-containers' expand="lg"> {/* Expanding the Navbar for responsiveness */}
                <Container fluid>
                    <Navbar.Brand >
                        <img
                            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
                            alt="logo"
                            className="header-logo-image"
                        />
                        <span className="header-website-names">FindDubai</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-4 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <Form className="d-flex search-bar1">
                                <Form.Control
                                    type="search"
                                    placeholder=""
                                    className="me-1 search-item"
                                    aria-label="Search"
                                />
                                <Button className='btn btn-primary bt'>Search</Button>
                            </Form> */}
                        <SearchBarr placeholder="Enter a Service Name..." data={BookData} ></SearchBarr>
                           
                  

                            <Nav.Link className='listyourbussiness-headss'>List Your Business</Nav.Link>
                            <Nav.Link className='provide-servicess'>Provide Service</Nav.Link>
                            <Nav.Link className='My-accountss'>My Account</Nav.Link>
                           
                            <Link to="/add-products">
                            <Nav  className='signin-headss'>Signup/Signin</Nav>
                            </Link>
                            
                            
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            
        </div>
    )
}
