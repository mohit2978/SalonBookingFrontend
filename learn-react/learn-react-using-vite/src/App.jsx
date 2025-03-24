
import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./component/Login/login.jsx";
import MovieList from "./component/MovieList.jsx";
import Navbar from "./component/NavBar/navbar.jsx";
import {useEffect} from "react";




function App() {
    useEffect(() => {
        console.log("Inside use effect");
    })
    console.log("first line");
    console.log("second line");
    return (
    <>
        < Navbar />
        <Routes>
            <Route path="/list" element={<MovieList/>} />
            <Route path="/" element={<Login/>} />
        </Routes>

    </>
  )
}

export default App
