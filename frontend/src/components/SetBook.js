import React, { useState } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SetBook = () => {
  const location = useLocation();
  
  const initialBookDetails = location.state.bookDetails;

  const [bookDetails, setBookDetails] = useState(initialBookDetails);

  const handleUpdate = () => {
    // Send updated data to the server
    axios
      .put(`http://localhost:4000/bookupdate/${bookDetails.id}`, bookDetails)
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        alert("Book updated successfully")
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        alert("Couldnt update book")
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-12"></div>
            <div className="col my-5">
              <div className="card p-5">
                <div className="card-body">
                  <center>
                    <h5 className="card-title mb-5">UPDATE DETAILS</h5>
                  </center>
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="Title"
                        placeholder="Title"
                        value={bookDetails.Title}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="author"
                        name="Author"
                        placeholder="Author"
                        value={bookDetails.Author}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="genre"
                        name="Genre"
                        placeholder="Genre"
                        value={bookDetails.Genre}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="publicationDate"
                        name="PublicationDate"
                        placeholder="Publication Date"
                        value={bookDetails.PublicationDate}
                        onChange={handleChange}
                      />
                    </div>
                  </form>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <button
                      type="button"
                      className="btn btn-primary me-2"
                      onClick={handleUpdate}
                    >
                      UPDATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetBook;
