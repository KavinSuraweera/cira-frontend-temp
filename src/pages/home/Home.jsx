import React from 'react';
import {Link} from "react-router-dom";
import Header from "../../components/Header";
import "./assets/css/Home.style.css"
import {motion} from "framer-motion";
import {AiFillCaretRight} from "react-icons/ai";
import {HiOutlineDocumentSearch} from "react-icons/hi";
import {Button, Container, Grid} from "@mui/material";

const Home = () => {

    return (
        <>
            <div>
                {/*<Grid className="position-fixed w-100 home-bg overlay" style={{*/}
                {/*    height: "100%",*/}
                {/*    zIndex: "-10"*/}
                {/*}}>*/}

                {/*</Grid>*/}
                <Grid className="px-5">
                    <Grid className="px-5">
                        <Grid>
                            <Header/>
                        </Grid>
                    </Grid>
                </Grid>

                {/* content */}

                {/*<Grid px={4} p={3} className="px-4 p-3">*/}
                {/*    <Grid py={3} mx={4} className="py-3 mx-4">*/}

                {/*        <div*/}
                {/*            className="shadow card m-auto col-sm-9 col-md-7 col-lg-6 col-xl-4 py-sm-5 py-md-4 px-3 py-4"*/}
                {/*            style={{borderRadius: "15px", borderWidth: "0"}}>*/}
                {/*            <Grid className="row col  col-12 px-5" style={{fontSize: "30px", fontWeight: "500"}}>*/}
                {/*                Welcome*/}
                {/*            </Grid>*/}
                {/*            <Grid className="row col-12 px-5" style={{fontSize: "20px", color: "#FEBDA0"}}>*/}
                {/*                Select to visualise*/}
                {/*            </Grid>*/}
                {/*            <Grid className="row col-12 pt-5 pb-3 px-2 m-auto">*/}
                {/*                <Grid className="col-12 col-lg-5 py-2 px-2">*/}
                {/*                    <motion.button*/}
                {/*                        whileHover={{opacity: 0.8}}*/}
                {/*                        whileTap={{scale: 0.98}}*/}
                {/*                        className="btn btn-dark p-2 w-100">*/}
                {/*                        Create data <AiFillCaretRight/>*/}
                {/*                    </motion.button>*/}
                {/*                </Grid>*/}
                {/*                <div className="col-sm-12 col-lg-7 py-2 px-2">*/}
                {/*                    <motion.button*/}
                {/*                        whileTap={{scale: 0.98}}*/}
                {/*                        className="btn btn-outline-dark p-2 w-100">*/}
                {/*                        <HiOutlineDocumentSearch/> Use Exported Data*/}
                {/*                    </motion.button>*/}
                {/*                </div>*/}
                {/*            </Grid>*/}
                {/*        </div>*/}

                {/*        /!*<div className=" p-5 mx-3 d-flex justify-content-center">*!/*/}
                {/*        /!*    <div className="widget bg-white p-5 py-4 col-lg-5" style={{borderRadius: "20px"}}>*!/*/}
                {/*        /!*        <div className="row">*!/*/}
                {/*        /!*            <div className="col py-3 px-" style={{fontSize: "25px", fontWeight: "400"}}>*!/*/}
                {/*        /!*                <div className="col py-0">*!/*/}
                {/*        /!*                    Welcome*!/*/}
                {/*        /!*                </div>*!/*/}
                {/*        /!*                <div className="col py-0" style={{color: "#FEBDA0", fontSize: "17px"}}>*!/*/}
                {/*        /!*                    Select to visualise*!/*/}
                {/*        /!*                </div>*!/*/}
                {/*        /!*            </div>*!/*/}

                {/*        /!*            <div className="row my-3 d-flex justify-content-around m-auto">*!/*/}

                {/*        /!*                <button className="col-5 w-auto btn py-2 px-4" style={{backgroundColor:"#1A1A1A", color:"white"}}>Create Data</button>*!/*/}
                {/*        /!*                <button className="col-5 w-auto btn py-2 px-4" style={{backgroundColor:"#FEBDA0", color:"white"}}>Use Exported Data</button>*!/*/}
                {/*        /!*                /!*<button className="col-5 w-auto btn py-2 px-4" style={{backgroundColor:"#FEBDA0", color:"white"}}>Use Exported Data</button>*!/*!/*/}

                {/*        /!*            </div>*!/*/}

                {/*        /!*        </div>*!/*/}
                {/*        /!*    </div>*!/*/}
                {/*        /!*</div>*!/*/}

                {/*    </Grid>*/}
                {/*</Grid>*/}


                {/* Temp Buttons  */}

                {/*<div>*/}
                {/*    <Link to="/new">*/}
                {/*        <button>*/}
                {/*            link to new page*/}
                {/*        </button>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <Link to="/visualisation">*/}
                {/*        <button>*/}
                {/*            Visualisation*/}
                {/*        </button>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <Link to="/test">*/}
                {/*        <button>*/}
                {/*            test*/}
                {/*        </button>*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </>
    )
}


export default Home
