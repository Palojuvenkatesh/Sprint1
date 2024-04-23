import { Link } from "react-router-dom";


export function Productform(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/create-student"} className="nav-link">
            React MERN Stack App
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}