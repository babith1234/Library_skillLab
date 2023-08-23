import { useState } from "react";
import axios from "axios";
import "./Login.css";
import Navbar from "./Navbar";
const DeleteBook = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleDelete = () => {
    if (searchValue.trim !== "") {
      axios
        .delete(
          `http://localhost:4000/bookdelete/${encodeURIComponent(searchValue)}`
        )
        .then((response) => {
          alert("BOOK DELETED SUCCESSFULLY");
          console.log(response);
        })
        .catch((e) => {
          alert("COULDNT DELETE BOOK");
          console.log(e);
        });
    }
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
                    <h5 class="card-title mb-5">DELETE BOOK</h5>
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
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                      ></input>
                    </div>
                  </form>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <button
                      type="submit"
                      className="btn btn-primary me-2 bg-danger"
                      onClick={handleDelete}
                    >
                      DELETE
                    </button>
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

export default DeleteBook;
