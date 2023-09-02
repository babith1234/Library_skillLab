import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./Login.css";
import Navbar from "./Navbar";
const UpdateBook = () => {
  const [search, setSearch] = useState("");
  const [bookDetails, setBookDetails] = useState({});
  const navigate = useNavigate();

  // const handleSearch = () => {
  //   axios
  //     .get(`http://localhost:4000/booksearch/${encodeURIComponent(search)}`)
  //     .then((response) => {
  //       setBookDetails(response.data);
  //       console.log(response.data);
  //       navigate("/setbook", { state: { bookDetails: response.data } }); // Move navigate here
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  const handleSearch = () => {
    axios.get(`http://localhost:4000/booksearch/${encodeURIComponent(search)}`)
      .then((response) => {
        const bookDetailsFromAPI = response.data[0]; // Get the object from the array
        setBookDetails(bookDetailsFromAPI); // Update the state
        console.log(bookDetailsFromAPI); // Log the book details object
        navigate("/setbook", { state: { bookDetails: bookDetailsFromAPI } });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  

  return (
    <>
      <Navbar />

      <div class="login-container">
        <div class="container">
          <div class="row">
            <div class="col-md-2 col-sm-12"></div>
            <div class="col my-5">
              <div class="card">
                <div class="card-body">
                  <center>
                    <h5 class="card-title mb-5">UPDATE BOOK</h5>
                  </center>
                  <form>
                    <div class="mb-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label"
                      ></label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder=" Enter the title or Author "
                        aria-describedby="emailHelp"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      ></input>
                    </div>
                  </form>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <Link to="/setbook" class="text-decoration-none p-5">
                      <button
                        type="submit"
                        className="btn btn-primary me-2 bg-warning"
                        onClick={handleSearch}
                      >
                        SEARCH
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
             
            </div>
            <div class="col-md-2 col-sm-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBook;
