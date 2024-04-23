import CreateStudent from "../../components/createformcomponent/createform";
import { Adminmenu } from "../Adminmenucomponent/adminmenu.component";
import { Headcomponent } from "../Headcomponent/heaadcomponent";
import { Addproduct } from "../footercomponent/Addproductcomponent/addproduct.component";

export function Adminlayout(){
    return(
        <div>
            <div className="row">
                <div className="col-3">
                <Adminmenu></Adminmenu>
                </div>
                <div className="col-8">
                    <div>
                       <Headcomponent></Headcomponent>
                    </div>
                    <div>
                  <CreateStudent></CreateStudent>
                    </div>
                </div>
            </div>
        </div>
    )
}