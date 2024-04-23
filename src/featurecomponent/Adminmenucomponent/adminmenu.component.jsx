import './adminmenu.component.css';
import { Link } from 'react-router-dom';
export function Adminmenu(){
   
    return(
        <div className='main--menu'>
            <div className='backgrounds'>
              
                <h1 className='menu-management'>
                    Menu Management
                </h1>
                <Link to="/add-products">
                <h3 className='add-products'>Add Products</h3>
                </Link>
                
                <Link to="/productlist-table">
                <h3 className='rest-products'>Products List</h3>
                </Link>
                
                
            </div>
        </div>
    )
}