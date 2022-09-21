import React, {useState} from 'react';
import {GiHamburgerMenu} from "react-icons/gi"
import {motion} from "framer-motion"
import {FiChevronDown} from "react-icons/fi";


const Navbar = () => {



    const [nav, setNav] = useState(false);

    const navBarToggleHandler = () => {
        if (nav) {
            setNav(false)
        } else {
            setNav(true)
        }
    }

    const handleRedirectToVisualisation = () => {

    }


    return (
        <header className="header mt-sm-4 py-4  ">

            <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "transparent"}}>
                <div className="container col-12 ">
                    <div className="col-8 col-lg-6 ">

                        <div className="col-10 ">
                            <span style={{fontSize: "40px", fontWeight: "400"}}>CIRA</span>
                        </div>
                        <div className="col-12">
                            <span className="theme-lightBlue-text" style={{
                                fontSize: "26px",
                                fontWeight: "400",
                            }}>EDA-2 Visualisation</span>
                        </div>

                    </div>

                    <motion.div
                        whileHover={{scale: 1.03}}
                        whileTap={{scale: 1}}
                        className="navbar-toggler collapsed"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        style={{borderStyle: "solid", borderWidth: "0px"}}
                        onClick={
                            () => navBarToggleHandler()}>
                        <span className=""><GiHamburgerMenu/></span>
                    </motion.div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-md-auto gap-5" style={{fontWeight: "600", color: "dark"}}>

                                <li className="nav-item"
                                    onClick={() => handleRedirectToVisualisation()}>
                                    <a className="nav-link" href="#" style={{
                                        color: "",
                                        textDecoration: "none"
                                    }}>
                                        Visualiser<span><FiChevronDown/></span>
                                    </a>
                                </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#"> Help</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase" href="#"> Cira</a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
            {nav ? <> kjnonodns</> : <></>}


        </header>
    )

}

export default Navbar;
