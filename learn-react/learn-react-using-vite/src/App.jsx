
import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./component/Login/login.jsx";
import MovieList from "./component/MovieList.jsx";
import Navbar from "./component/NavBar/navbar.jsx";




function App() {


    return (
    <>
        < Navbar />
        <Routes>
            <Route path="/list" element={<MovieList/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>

    </>
  )
}

export default App
