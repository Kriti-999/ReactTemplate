import React from "react"
import About from "./About";
import { Navbar,Container, Nav } from 'react-bootstrap';
import { NavLink ,BrowserRouter} from "react-router-dom";
function Menu(){
    return <div>
<nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
    <img className="logo"src="https://mentorplus.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.0db42e3e.svg&w=384&q=75"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto navlinks">
        <li className="nav-item p-3">
          <NavLink style={{color:"rgb(146,149,152)",textDecoration:"none" ,fontWeight:"500"}} exact activeClassName="active-class nav-link clicked" to="/">Home</NavLink>
        </li>
        <li className="nav-item p-3">
        <NavLink style={{color:"rgb(146,149,152)",textDecoration:"none" ,fontWeight:"500"}} exact activeClassName="active-class nav-link" to="/price">Plan & Pricing</NavLink>
        </li>
        <li className="nav-item p-3">
        <NavLink style={{color:"rgb(146,149,152)",textDecoration:"none" ,fontWeight:"500"}} exact activeClassName="active-class nav-link" to="/faq">FAQ's</NavLink>
        </li>
        <li className="nav-item p-3">
        <NavLink style={{color:"rgb(146,149,152)",textDecoration:"none" ,fontWeight:"500"}} exact activeClassName="active-class nav-link" to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <form className="d-flex">
      <button style={{ color:"rgb(27,75,141)",border:"3px solid rgb(27,75,141)"}}className="btn btn-outline m-2" type="button">Login</button>
        <button style={{color:"white",backgroundColor:"rgb(27,75,141)"}}className="btn  m-2" type="button">Sign Up</button>
      </form>
    </div>
  </div>
</nav>
    </div>
}
export default Menu;