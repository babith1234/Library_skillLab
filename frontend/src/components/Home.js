import AddBook from "./AdBooks";
import Navbar from "./Navbar";
import axios from "axios"
import { useState,useEffect } from "react";

const Home = () => {
const [books,setbooks]=useState([])

useEffect(()=>{
  function getAllBooks(){
    try{
        axios.get("http://localhost:4000/bookdisplay").then((response)=>{
          console.log(response.data)
          setbooks(response.data)
        })
    }
    catch(e){
      console.log(e)
    }
  }
  getAllBooks()
},[])
  return (
    <>
      <Navbar />
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/949118068/photo/books.jpg?s=612x612&w=0&k=20&c=1vbRHaA_aOl9tLIy6P2UANqQ27KQ_gSF-BH0sUjQ730="
              class="d-block w-100"
              alt="..."
              height="600px"
            ></img>
            <div class="carousel-caption d-none d-md-block">
              <h2>Access your Library</h2>
              <p>Get 24/7 access anytime anywhere</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://imgmedia.lbb.in/media/2020/03/5e6fa0adcdf431136ea4aeb9_1584373933388.jpg"
              class="d-block w-100"
              alt="..."
              height="600px "
            ></img>
            <div class="carousel-caption d-none d-md-block">
              <h2>Your personalised Library</h2>
              <p>Save all your books Here</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12743/production/_88778557_thinkstockphotos-510493058.jpg"
              class="d-block w-100"
              alt="..."
              height="600px"
            ></img>
            <div class="carousel-caption d-none d-md-block">
              <h2>Create Books</h2>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <center>
        {" "}
        <h1 class="mt-4">MY LIBRARY</h1>
      </center>

      {

        books.map((book,i)=>{
          return(
            <h2 key={i}>{book.Title} {book.Author} {book.Genre} {book.PublicationDate}</h2>
          )
        })
      }

    </>
  );
};

export default Home;
