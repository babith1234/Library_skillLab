import "./Login.css";
import Navbar from "./Navbar";
import lib from "./lib.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate()

  const handleSubmit = () => {
    const newUser = {
    
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4000/userlogin", newUser)
      .then((response) => {
        navigate("/")
        localStorage.setItem("authToken",response.authToken)
      })
      .catch((e) => {
        alert("Login with correct credentials");
      });
    setEmail("");
    setPassword("");
  };
  return (
    <div>
  

      <div class="login-container login">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12"></div>
            <div class="col my-5">
              <div class="card">
                <div class="card-body">
                  <center>
                    <h5 class="card-title mb-5">User Login</h5>
                  </center>
                  <form>
                    <div class="mb-3">
                     
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Email"
                        aria-describedby="emailHelp"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      ></input>
                    </div>
                    <div class="mb-3">
                     
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                      ></input>
                    </div>
                  </form>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <button type="submit" className="btn btn-primary me-2"onClick={handleSubmit}>
                      Login
                    </button>
                    <div className="mb-3">
                      <a href="/register" className="text-muted text-decoration-none">
                        New User? Signup
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
