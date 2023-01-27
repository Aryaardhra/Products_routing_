import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import'./Navbar.css';

export default function Navbar() {
  const navigateTo = useNavigate();
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-info ">
    
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active nav-link">
        <NavLink to="/home">Home </NavLink>
        </li>
        <li className="nav-item active nav-link">
        <NavLink to="/about">About </NavLink>
        </li>
        <li className="nav-item active nav-link">
        <NavLink to="/contact">Contact </NavLink>
        </li>
        <li className="nav-item active nav-link">
          <NavLink to="/CategorizedProducts">Products</NavLink>  
        </li>&nbsp;&nbsp;
        
        <button onClick={()=>{
          navigateTo("/")
          }} className='btn btn-outline-dark float-end'>LOGOUT</button>
      </ul>
    </div>
  </nav>
    </>
  )
}
