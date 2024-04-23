// App.js
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Headercomponent } from './featurecomponent/Headercomponent/header.component';
import { Servicecomponent } from './featurecomponent/servicecomponents/service.component';
import { CarosalComponent } from './featurecomponent/carosal/carosal.comonent';
import { Cardcomponent } from './featurecomponent/cardcomponents/card.component';
import { Footercomponent } from './featurecomponent/footercomponent/footer.component';
import { BrowserRouter } from 'react-router-dom';
import { Approuter } from './app.router';
import SliderComponent from './featurecomponent/Smallslidercomponent/slider.component';
import { Hospitalcomponent } from './featurecomponent/Hospitalservicecomponent/hospital.component';

import BookData from './Data.json';
import { Adminmenu } from './featurecomponent/Adminmenucomponent/adminmenu.component';
import { Adminlayout } from './featurecomponent/adminlayoutcomponent/adminlayout';
import CreateStudent from './components/createformcomponent/createform';
import EditStudent from './components/editformcomponent/editform';
import StudentList from './components/formlistcomponent/formlist';
import { Productform } from './components/productcomponent/productform';
import { Logincomponent, Loginuser } from './components/Logincomponent/login.component';
import { SignUpcomponent } from './components/signupcomponent/signup.component';



function App() {
  return (
    <div>

      <BrowserRouter>
       
        <Approuter />
        
        
      </BrowserRouter> 

      {/* <SearchBar></SearchBar> */}
      {/* <Searchbar></Searchbar> */}

      {/* <Adminlayout></Adminlayout> */}

{/* <Logincomponent></Logincomponent> */}

{/* <SignUpcomponent></SignUpcomponent> */}
      
    </div>
  );
}

export default App;
