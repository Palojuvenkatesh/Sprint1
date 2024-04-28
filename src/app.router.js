


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
import { Logincomponent } from "./components/Logincomponent/login.component";
import { SignUpcomponent } from "./components/signupcomponent/signup.component";
import CreateProduct from "./components/createformcomponent/createform";
import EditProduct from "./components/editformcomponent/editform";
import ProductList from "./components/formlistcomponent/formlist";



export function Approuter() {
  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/hospital-service" element={<Hospitalcomponent></Hospitalcomponent>}></Route>
    <Route path="/hospitals-services" element={<Hosptial></Hosptial>}></Route>
    <Route path="/resturant-services" element={<Restaurntservice></Restaurntservice>}></Route>
    <Route path="/resturant-category-service" element={<Categoryservice></Categoryservice>}></Route>
    <Route path="/Aagri-resturant-service" element={<Aagriresturant></Aagriresturant>}></Route>
    <Route path="/add-products" element={<Naddproducts></Naddproducts>}></Route>
    <Route path="/edit-product/:id" element={<NavigateEditbutton></NavigateEditbutton>}></Route>
    <Route path="/productlist-table" element={<Nproductlist></Nproductlist>} ></Route>
    <Route path="/login" element={<Logincomponent></Logincomponent>}></Route>
    <Route path="/signup" element={<SignUpcomponent></SignUpcomponent>}></Route>
    <Route path="/create-product" element={<CreateProduct></CreateProduct>}></Route>

    <Route path="/Product-list"  element={<ProductList></ProductList>}></Route>
    </Routes>
  );
}

function Naddproducts() {
  return (

      <div className="row">
          <div className="col-3">
              <Adminmenu></Adminmenu>
          </div>
          <div className="col-8">
              <div>
                  <Headcomponent></Headcomponent>
              </div>
              <div>
                 {/* <CreateStudent></CreateStudent> */}
                 <CreateProduct></CreateProduct>
                 {/* <StudentList></StudentList> */}
                  
              </div>
          </div>
      </div>
  )
}

function Nproductlist() {
  return (

      <div className="row">
          <div className="col-3">
              <Adminmenu></Adminmenu>
          </div>
          <div className="col-8">
              <div>
                  <Headcomponent></Headcomponent>
              </div>
              <div>
                 
                <ProductList></ProductList>
                  
              </div>
          </div>
      </div>
  )
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
             
                 <EditProduct></EditProduct>
                  
              </div>
          </div>
      </div>

  )
}