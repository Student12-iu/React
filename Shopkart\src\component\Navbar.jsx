import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

function Navbar  ()  {
  return (
     <>
      <div className="banner">
        <div className="container-fluid">
          <span className="new-badge">NEW</span>
          Free shipping on orders above ₹499 | Easy 7-day returns
        </div>
      </div>
       
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          
          <a className="navbar-brand" href="/">
            <img src="logo.png" alt="ShopKart" className="shopkart-logo"/>
          </a>
    {/* <div>
        <Link to="/">Home</Link> <br></br>
        <Link to="/cart">Cart</Link> <br></br>
        <Link to="/login">Login</Link> <br></br>
        <Link to="/products">Products </Link> <br/>
        <Link to="/register">Register </Link> <br/>
    </div> */}
     {/* <div className="dropdown category-dropdown">
            <button className="category-btn dropdown-toggle" type="button" 
            data-bs-toggle="dropdown" aria-expanded="false">  All Categories </button>

           <ul className="dropdown-menu">
            <li> <a className="dropdown-item" href="#"> Electronics </a> </li>
              <li> <a className="dropdown-item" href="#"> Fashion </a> </li>
              <li> <a className="dropdown-item" href="#"> Home & Kitchen </a> </li>
              <li> <a className="dropdown-item" href="#"> Beauty & Personal Care </a> </li>
              <li> <a className="dropdown-item" href="#"> Sports & Fitness </a> </li>
              <li> <a className="dropdown-item" href="#"> Books & Stationery </a> </li>
            </ul>
          </div> */}

          
           <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Electronics</a></li>
            <li><a class="dropdown-item" href="#">Fashion</a></li>
            <li><a class="dropdown-item" href="#">Home and Kitchen </a></li>
            <li><a class="dropdown-item" href="#">Beauty and Personal Care</a></li>
            <li><a class="dropdown-item" href="#">Sports and Fitness</a></li>
            <li><a class="dropdown-item" href="#">Books and Stationery</a></li>
          </ul>
        </li>

          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse"
            data-bs-target="#shopKartNavbar" >
            <span className="navbar-toggler-icon"></span> </button>

          
          <div className="collapse navbar-collapse" id="shopKartNavbar">
            <ul className="navbar-nav main-nav">

              <li className="nav-item"> <a className="nav-link active" href="/"> Home </a> </li>
              <li className="nav-item"> <a className="nav-link" href="/cart"> Cart</a> </li>
              <li className="nav-item"> <a className="nav-link" href="/login"> Login</a> </li>
              <li className="nav-item"> <a className="nav-link" href="/register"> Register</a> </li>
              <li className="nav-item"> <a className="nav-link" href="/products"> Products</a> </li>
            </ul>
            </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar