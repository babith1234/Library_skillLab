import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.css";
import Navbar from "./Navbar";
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  const addBook = () => {
    if (title !== "") {
      // Create a new book object and add it to the books array
      const newBook = {
        Title: title,
        Author: author,
        Genre: genre,
        PublicationDate: publicationDate,
      };

      axios
        .post("http://localhost:4000/bookcreate", newBook)
        .then((response) => {
          alert("BOOK ADDED SUCCESSFULLY");
        })
        .catch((e) => {
          alert("COULDN'T ADD THE BOOK");
        });
    }

    setTitle("");
    setAuthor("");
    setGenre("");
    setPublicationDate("");
  };

  return (
    <>
      <Navbar />
      <div class="login-container">
        <div class="container">
          <div class="row">
            <div class="col-md-2 col-sm-12"></div>
            <div class="col my-5">
              <div class="card p-5">
                <div class="card-body">
                  <center>
                    <h5 class="card-title mb-5">ADD BOOKS HERE</h5>
                  </center>
                  <form>
                    <div class="mb-3">
                      <input
                        type="text"
                        name="Title"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Title"
                        aria-describedby="emailHelp"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      ></input>
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        name="Author"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="text"
                        name="Genre"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="text"
                        name="PublicationDate"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Publication Date"
                        value={publicationDate}
                        onChange={(e) => setPublicationDate(e.target.value)}
                      ></input>
                    </div>
                  </form>
                  <div class="btn">
                    <div class="mb-3 d-flex align-items-center justify-content-between">
                      <button
                        type="button"
                        className="btn btn-primary me-2 bg-success"
                        onClick={addBook}
                      >
                        ADD
                      </button>
                    </div>

                    <div class="mb-3 d-flex align-items-center justify-content-between">
                      <Link to="/delbook" class="text-decoration-none p-5">
                        <button
                          type="button"
                          className="btn btn-primary me-2 bg-danger"
                        >
                          DELETE
                        </button>
                      </Link>
                    </div>

                    <div class="mb-3 d-flex align-items-center justify-content-between">
                      <Link to="/upbook" class="text-decoration-none p-5">
                        <button
                          type="button"
                          className="btn btn-primary me-2 bg-warning"
                        >
                          UPDATE
                        </button>
                      </Link>
                    </div>
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

export default AddBook;
