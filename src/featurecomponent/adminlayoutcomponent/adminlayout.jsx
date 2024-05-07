
import { Adminmenu } from "../Adminmenucomponent/adminmenu.component";
import { Headcomponent } from "../Headcomponent/heaadcomponent";


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
                  
                    </div>
                </div>
            </div>
        </div>
    )
}