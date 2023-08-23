
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AddBook from './components/AdBooks';
import DeleteBook from './components/DeleteBook';
import UpdateBook from './components/UpdateBook';
import SetBook from './components/SetBook';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/addbook' element={<AddBook />}></Route>
          <Route path='/delbook' element={<DeleteBook />}></Route>
          <Route path='/upbook' element={<UpdateBook />}></Route>
          <Route path='/setbook' element={<SetBook />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
