import React from "react"
import {Link} from "react-router-dom";
import {AiFillCaretRight} from "react-icons/ai";
import {RiFileSearchLine} from "react-icons/ri";
import "../../components/Backgrounds/themes.css"
import BgImg1 from "../../components/Backgrounds/BgImg1";

const Home = () => {
    return (
        <div>
            <BgImg1/>
            <div className="bg-white col-4 m-auto my-5 py-3 px-2 shadow" style={{borderRadius: "28px"}}>
                <div className="px-4 m-3">
                    <div className="col-12  p-0">
                        <span style={{fontSize: "40px", color:"", fontWeight:"400"}}>Welcome</span>
                    </div>
                    <div className=" p-0">
                        <span className="theme-lightBlue-text" style={{ fontSize:"26px", fontWeight:"400"}}> Select to visualise</span>
                    </div>

                    <div className="py-4 my-3 d-flex justify-content-between" style={{fontWeight:"400", fontSize:"18px"}}>
                        <button className="btn btn-dark px-4" style={{height:"53px", borderRadius:"13px"}}>
                            Create Data <span> <AiFillCaretRight/> </span>
                        </button>
                        <button className="btn btn-light px-4" style={{borderStyle:"solid", borderColor:"#000000", borderWidth:"1px", height:"53px", borderRadius:"13px"}}>
                            <span><RiFileSearchLine/></span> Use Exported Data
                        </button>
                    </div>
                </div>
            </div>

            <Link to="/visualisation">
                <button>vis</button>
            </Link>
            <Link to="/help">
                <button>help</button>
            </Link>
        </div>
    )
}

export default Home;
