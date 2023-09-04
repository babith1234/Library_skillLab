import "./Login.css";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    const newUser = {
      name: name,
      contact: contact,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4000/usercreate", newUser)
      .then((response) => {
        alert("USER CREATED SUCCESSFULLY");
      })
      .catch((e) => {
        alert("COULDN'T ADD TEH USER");
      });

    setName("");
    setContact("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
     
      <div class="login-container register">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12"></div>
            <div class="col my-5">
              <div class="card">
                <div class="card-body">
                  <center>
                    <h5 class="card-title mb-5">SIGN UP</h5>
                  </center>
                  <form>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Name"
                        aria-describedby="emailHelp"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Contact No"
                        name="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>
                    </div>
                  </form>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <button
                      type="submit"
                      className="btn btn-primary me-2"
                      onClick={addUser}
                    >
                      Submit
                    </button>
                    <div className="mb-3">
                      <a
                        href="/login"
                        className="text-muted text-decoration-none"
                      >
                        Login?
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
    </>
  );
};

export default Register;
