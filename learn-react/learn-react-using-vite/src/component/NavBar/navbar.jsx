import React from 'react';
import Login from "../Login/login.jsx";
import {useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div  className='flex justify-between px-20 py-4 border-b '>
            <h1 onClick={()=>navigate("/list")} className='cursor-pointer'> Cinema </h1>
             <button type='button' onClick={()=>navigate("/")}>Login</button>
        </div>
    );
}

export default Navbar;