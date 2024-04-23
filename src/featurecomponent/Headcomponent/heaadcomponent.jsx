import { Link } from 'react-router-dom';
import './headcomponent.css';

export function Headcomponent() {
    return (
        <div>
            <div className="bg">
                <h1 className='head-line'>Resturant Management System</h1>
                <ol className='menu-bar1'>
                    <li className='admin'> Admin</li>
                    
                    <Link to="/">
                    <li className='logout-button'>Logout </li> 
                    </Link>
                    
                 
                  
                </ol>
            </div>
        </div>

    )
}   