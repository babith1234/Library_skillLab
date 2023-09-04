import { Outlet, Link,useNavigate } from "react-router-dom";
import "./Login.css";

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout=()=>{
      localStorage.removeItem("authToken")
      navigate("/login")
  }

  const handleLogin = ()=>{
    navigate("/login")
  }

  const handleRegister = ()=>{
    navigate("/register")
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-warning"style={{height:"10vh"}}>
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
                <Link
                  to="/"
                  class="text-decoration-none p-5"
                  style={{ color: "black" }}
                >
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  to="/addbook"
                  class="text-decoration-none p-5"
                  style={{ color: "black" }}
                >
                  AdBooks
                </Link>
              </li>
            </ul>

           {(!localStorage.getItem("authToken"))?
           <div className="d-flex">
              {/* <Link
                to="/register"
                class="text-decoration-none p-5 btn bg-white text-warning mx-5"
                style={{ color: "black" }}
              >
                Register
              </Link>

              <Link
                to="/login"
                class="text-decoration-none p-5 btn bg-white text-warning"
                style={{ color: "black" }}
              >
                Login
              </Link> */}
                  <div className="btn bg-white text-warning mx-2"onClick={handleLogin}>Login</div>
                  <div className="btn bg-white text-warning mx-2"onClick={handleRegister}>Register</div>

            </div>
             :
             <div className="btn bg-white text-warning mx-2"onClick={handleLogout}>Logout</div>

           }
            
            <form class="d-flex" role="search"></form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
