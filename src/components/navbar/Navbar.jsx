import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    /*Scroll navbar  backgraund*/
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector(".mainNavbar").classList.add("scroll");

        } else {
            document.querySelector(".mainNavbar").classList.remove("scroll");

        }
    }

    return (



        <nav
            className="mainNavbar  navbar navbar-expand-xl navbar-light bg-light mx-auto "
        >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"
                ><img src="images/logo.png" alt=""
                    /></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav ms-lg-auto bg-light m-0">
                        <li className="nav-item ps-4  ps-xl-0 ">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item ps-4 ps-xl-0">
                            <Link to="/Explore" className="nav-link ">Explore</Link>
                        </li>
                        <li className="nav-item ps-4 ps-xl-0">
                            <Link to="/ItemDetails" className="nav-link " >Item Details</Link>
                        </li>
                        <li className="nav-item ps-4 ps-xl-0">
                            <Link to="/Author" className="nav-link" >Author</Link>
                        </li>
                        <li className="nav-item ps-4 ps-xl-0">
                            <Link to="/CreateYours" className="nav-link" href="#">Create Yours</Link>
                        </li>




                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
