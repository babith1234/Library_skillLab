import { Outlet, Link } from "react-router-dom";
import "./Login.css"

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h1>Library</h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">

            <li class="nav-item">
                <Link to="/" class="text-decoration-none p-5"style={{color:"black"}}>
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/addbook" class="text-decoration-none p-5"style={{color:"black"}}>
                  AdBooks
                </Link>
              </li>

              <li class="nav-item ">
                <Link to="/register" class="text-decoration-none p-5"style={{color:"black"}}>
                  Register
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/login" class="text-decoration-none p-5"style={{color:"black"}}>
                  Login
                </Link>
              </li>

              

             

              {/* <li class="nav-item">
                <Link to="/delbook" class="text-decoration-none p-5">
                  DeleteBooks
                </Link>
              </li> */}

              
              
              {/* <li class="nav-item">
                <Link to="/upbook" class="text-decoration-none p-5">
                  UpdateBook
                </Link>
                </li> */}
          


             

                 
              {/* <li class="nav-item">
                <Link to="/setbook" class="text-decoration-none p-5">
                  Set books
                </Link>
                </li> */}
             

            </ul>

            <form class="d-flex" role="search"></form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
