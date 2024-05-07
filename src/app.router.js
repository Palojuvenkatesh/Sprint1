


// app.router.js
import { Route, Routes } from "react-router-dom";
import Homepage from "./featurecomponent/homepagecomponent/homepage.component";
import { Hospitalcomponent } from "./featurecomponent/Hospitalservicecomponent/hospital.component";
import { Hosptial } from "./featurecomponent/Hospitalscomponent/hospitals.component";
import { Restaurntservice } from "./featurecomponent/restaurntServicecomponent/restaurntservice";
import { Categoryservice } from "./featurecomponent/restcategorycomponents/category.component";
import { Aagriresturant } from "./featurecomponent/innerserviceresturantcomponent/service.component";
import { Adminmenu } from "./featurecomponent/Adminmenucomponent/adminmenu.component";
import { Headcomponent } from "./featurecomponent/Headcomponent/heaadcomponent";
import { Addproduct } from "./featurecomponent/footercomponent/Addproductcomponent/addproduct.component";







export function Approuter() {
  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/hospital-service" element={<Hospitalcomponent></Hospitalcomponent>}></Route>
    <Route path="/hospitals-services" element={<Hosptial></Hosptial>}></Route>
    <Route path="/resturant-services" element={<Restaurntservice></Restaurntservice>}></Route>
    <Route path="/resturant-category-service" element={<Categoryservice></Categoryservice>}></Route>
    <Route path="/Aagri-resturant-service" element={<Aagriresturant></Aagriresturant>}></Route>
    
    <Route path="/edit-product/:id" element={<NavigateEditbutton></NavigateEditbutton>}></Route>
    
   

    


    </Routes>
  );
}





function NavigateEditbutton(){
  return(
<div className="row">
          <div className="col-3">
              <Adminmenu></Adminmenu>
          </div>
          <div className="col-8">
              <div>
                  <Headcomponent></Headcomponent>
              </div>
              <div>
             
                 
                  
              </div>
          </div>
      </div>

  )
}







