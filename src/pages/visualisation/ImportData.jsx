import React, {useEffect, useState} from 'react';
import "./assets/css/Visualisation.css"
import GradientBlue from "../../components/Backgrounds/GradientBlue";
import {GrLocation} from "react-icons/gr";
import {AiFillCaretRight, AiOutlinePlus} from "react-icons/ai";
import Slider from '@mui/material/Slider';
import {styled} from '@mui/material/styles';
import "../../components/Backgrounds/themes.css"
import axios from "axios";
import "./assets/css/css.css"


import {RiArrowDropDownLine, RiFileSearchLine} from "react-icons/ri";
import {BsThreeDots} from "react-icons/bs";
import {FiDownload, FiUpload} from "react-icons/fi";
import {Audio, Grid, Rings, RevolvingDot} from 'react-loader-spinner'
import {motion} from "framer-motion";
import {IoIosArrowDropdown} from "react-icons/io";



function GrLocat() {
    return null;
}

const ImportData = () => {

    const URL = "";

    const [startDate, setStartDate] = useState(new Date());
    const [isLoadingImage, setIsLoadingImage] = useState(false);
    const [isSelectingSkyCoodinates, setIsSelectSkyCoodinates] = useState(true);
    const [isSelectingTelPosition, setIsSelectingTelPosition] = useState(true)
    const [visulizationText, setVisualizationText] = useState("Visualization")

    // ----------------- import Data --------------- //

    const [file1, setFile1] = useState(null);

    // ----------------- End import Data --------------- //


    const [skyCoodinates, setSkyCoodinates] = useState({
        value:"RA: 6h45m8. 9s Dec: -16°42'52.1",
    })

    const [values, setValues] = React.useState({
        amount: '', password: '', weight: '', weightRange: '', showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const PrettoSlider = styled(Slider)({
        color: '#000',
        height: 8,
        '& .MuiSlider-track': {
            border: 'none',
        },
        '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
            },
            '&:before': {
                display: 'none',
            },
        },
        '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 12,
            background: 'unset',
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: '50% 50% 50% 0',
            backgroundColor: '#000',
            transformOrigin: 'bottom left',
            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
            '&:before': {display: 'none'},
            '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
            },
            '& > *': {
                transform: 'rotate(45deg)',
            },
        },
    });



    /* -------------------------- Error Messages -------------------------- */

    const [isErrorImageLoading, setIsErrorImageLoading] = useState(false)

    /* ----------------------- End Error Messages  ------------------------ */



    /* -------------------------- handlers -------------------------- */

    const handleClickVisualise = (e) => {
        e.preventDefault()

        visualise();
    }

    const handleClickSkyCoodinates = (e) => {
        e.preventDefault()

        if (!isSelectingSkyCoodinates) {
            setIsSelectSkyCoodinates(true)
        } else {
            setIsSelectSkyCoodinates(false)
        }
    }

    const handleClickTelPosition = (e) => {
        e.preventDefault();

        if (!isSelectingTelPosition) {
            setIsSelectingTelPosition(true)
        } else {
            setIsSelectingTelPosition(false)
        }
    }





    /* ------------------- Data Handlers ------------------- */

    const handleChaneFile1 = (e) => {
        // setFile1(URL.createObjectURL(e.target.files[0]));
        test(e);

    }

    const test = (e) => {
        console.log(window.URL.createObjectURL(e.target.files[0]))
    }

    /* ------------------- End Data Handlers ------------------- */




    /* ------------------- API calls ------------------- */

    const visualise = () =>{


        console.log("vis");

        setIsLoadingImage(true)

        let visData = {
            skyCoodinates : skyCoodinates.value,
        }

        axios
            .post(URL+"", visData)
            .then(response => {
                setIsLoadingImage(false);

                console.log(response.data);

            })
            .catch(error => {
                setIsLoadingImage(false);

                console.log(error.message);

                setVisualizationText("Try Again ...")
                setIsErrorImageLoading(true)

            })
    }



    /* -----------------End API calls ------------------- */

    useEffect(() => {
        console.log("Log")
    }, []);


    return (
        <div className="">
            {/*<GradientBlue/>*/}

            <div className=" px-0 px-lg-5">
                <div className="px-5 " style={{width: "98%"}}>
                    <div className="row p-0 p-md-2 ">
                        <div className="col-12 col-lg-5 p-2">
                            <div className=" p-1">
                                <form>

                                    {/* --------- input row 1-----------*/}
                                    <div className="col-12 my-5">
                                        <div className="my-3"
                                             style={{
                                                 fontWeight: "600",
                                                 fontSize: "20px",
                                                 color: "#1A1A1A"
                                             }}
                                        >
                                            Import Data
                                            <span className="mx-2 theme-lightBlue-text " style={{
                                                fontWeight: "400",
                                                fontSize: "14px",
                                            }}>
                                               Import exported data
                                        </span>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-xl-8 m-0">
                                                <motion.div
                                                    whileHover={{backgroundColor:"#0088CA",borderColor:"#ffffff", color:"#ffffff"}}
                                                    className="image-upload-wrap">
                                                    <img src={file1} className="upload-image" alt="img"/>
                                                    <input className="file-upload-input" type='file'
                                                           accept="image/*"
                                                           onChange={handleChaneFile1}/>
                                                    <div className="drag-text">
                                                        <h3>
                                                            <div><FiUpload style={{fontSize: 30}}/></div>
                                                            <br/>
                                                            <p>Picture 3
                                                                <br/>
                                                                Drop files here to upload
                                                            </p>
                                                        </h3>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className="col-12 col-xl-4 my-xl-0">
                                                <motion.div className="btn btn-dark h-100 w-100 d-flex align-items-center justify-content-center"
                                                            whileTap={{scale:0.95}}
                                                            style={{
                                                                borderRadius: "13px",
                                                                maxHeight: "53px",
                                                            }}
                                                            onClick={handleClickVisualise}
                                                >
                                                    Visualise <span><AiFillCaretRight/></span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* --------- input row 2-----------*/}
                                    <div className="col-12 my-5">
                                        <div className="my-3"
                                             style={{
                                                 fontWeight: "600",
                                                 fontSize: "20px",
                                                 color: "#1A1A1A"
                                             }}
                                        >
                                            Telescope Position
                                            <span className="mx-2 theme-lightBlue-text" style={{
                                                fontWeight: "400",
                                                fontSize: "14px",
                                            }}>
                                               Location of the array
                                        </span>
                                        </div>
                                        <div className="bg-white"
                                             style={{
                                                 borderRadius: "13px",
                                                 boxShadow: "0px 4px 10px rgba(254, 189, 160, 0.2)"
                                             }}>
                                            <motion.div
                                                transition={{duration: 0.5}}
                                                whileTap={{scale: 0.9}}
                                                className="bg-white theme-border"
                                                style={{
                                                    borderRadius: "13px",
                                                    minHeight: "53px"
                                                }}>
                                                <div>

                                                    {isSelectingTelPosition ?


                                                        <motion.div
                                                            className="btn btn-white row col-12 d-flex justify-content-between align-items-center input-group m-0 row  "
                                                            style={{
                                                                borderRadius: "13px",
                                                                height: "51px"
                                                            }}
                                                            onClick={handleClickTelPosition}
                                                        >
                                                            <div className="row">
                                                                <div
                                                                    className="d-flex col align-items-center ">
                                                                    <GrLocation/><span className="px-3"
                                                                                       style={{float: "right"}}>Choose ...</span>

                                                                </div>
                                                                <div className="col-1 "
                                                                     style={{width: "10px"}}>
                                                                    <IoIosArrowDropdown/>
                                                                </div>
                                                            </div>


                                                        </motion.div>

                                                        :

                                                        /*------------------ make */
                                                        <motion.div
                                                            className="p-2"
                                                            style={{
                                                                position: "",
                                                                maxHeight: "210px"
                                                            }}
                                                            initial={{height: "auto"}}
                                                            animate={{height: "auto"}}
                                                            onClick={handleClickTelPosition}
                                                        >
                                                            <div className="" style={{
                                                                overflowX: "scroll"
                                                            }}>
                                                                <div className="col-12">
                                                                    <div className="row">
                                                                        <motion.div className="col-10">
                                                                            <span style={{
                                                                                opacity: "0.4"
                                                                            }}> <GrLocation/></span>
                                                                            <span className="px-2"
                                                                                  style={{fontSize: "12px"}}>RA: 6h45m8. 9s Dec: -16°42'52.1</span>
                                                                        </motion.div>
                                                                        <div className="col-2 ">
                                                                            <div
                                                                                className="col d-flex align-items-center"
                                                                                style={{fontSize: "14px"}}>SUN
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                            </div>


                                                            <div className="col ">
                                                                <div className="row  ">
                                                                    <div
                                                                        className="col-12 d-flex justify-content-end">
                                                                        <motion.div
                                                                            className="btn theme-border m-1"
                                                                            style={{
                                                                                height: "36px"
                                                                            }}>
                                                                            Edit
                                                                        </motion.div>
                                                                        <motion.div
                                                                            className="btn theme-lightBlue-button m-1 d-flex align-items-center"
                                                                            style={{
                                                                                height: "36px"
                                                                            }}>
                                                                            <AiOutlinePlus/> <span className="ms-1">New Preset</span>
                                                                        </motion.div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    }
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                    {/* --------- input row 3-----------*/}

                                    <div className="col-12 my-5">
                                        <div className="row">
                                            <div className="col-12 col-md-6 ">
                                                <div className="my-2"
                                                     style={{
                                                         fontWeight: "600",
                                                         fontSize: "20px",
                                                         color: "#1A1A1A"
                                                     }}
                                                >
                                                    Start Time
                                                </div>

                                                <div className="bg-white theme-border">
                                                    <div className="input-group m-0 row">
                                                        <div
                                                            className="input-group-prepend col-1 d-flex align-items-center justify-content-center"
                                                            style={{height: "53px"}}>
                                                            <label className=""
                                                                   htmlFor=""><GrLocation/></label>
                                                        </div>

                                                        <div className="col-10">
                                                            <input
                                                                className="w-100 h-100"
                                                                type="time"
                                                                style={{
                                                                    borderStyle: "solid",
                                                                    borderWidth: "0"
                                                                }}
                                                            />
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 ">

                                                <div className="my-2"
                                                     style={{
                                                         fontWeight: "600",
                                                         fontSize: "20px",
                                                         color: "#1A1A1A"
                                                     }}
                                                >
                                                    End Time
                                                </div>

                                                <div className="bg-white theme-border">
                                                    <div className="input-group m-0 row">
                                                        <div
                                                            className="input-group-prepend col-1 d-flex align-items-center justify-content-center"
                                                            style={{height: "53px"}}>
                                                            <label className=""
                                                                   htmlFor=""><GrLocation/></label>
                                                        </div>

                                                        <div className="col-10">
                                                            <input
                                                                className="w-100 h-100"
                                                                type="time"
                                                                style={{
                                                                    borderStyle: "solid",
                                                                    borderWidth: "0"
                                                                }}
                                                            />
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* ------------ input row 4 ----------*/}
                                    <div className="col-12 my-5">
                                        <div className="my-3"
                                             style={{
                                                 fontWeight: "600",
                                                 fontSize: "20px",
                                                 color: "#1A1A1A"
                                             }}
                                        >
                                            Radius
                                            <span className="mx-2 theme-lightBlue-text" style={{
                                                fontWeight: "400",
                                                fontSize: "14px",
                                            }}>
                                                Size of the scanned area
                                        </span>
                                        </div>
                                        <PrettoSlider
                                            valueLabelDisplay="auto"
                                            aria-label="pretto slider"
                                            defaultValue={20}
                                        />

                                        {/* --------- buttons --------*/}
                                        <div className="col-12 my-5">
                                            <div className="row">

                                                <div className="p-2 col-12 col-md-6">
                                                    <motion.div className="btn btn-light col-12 d-flex align-items-center justify-content-center"
                                                                whileTap = {{scale:0.95}}
                                                                style={{
                                                                    backgroundColor: "#fff",
                                                                    borderStyle: "solid",
                                                                    borderColor: "#000",
                                                                    borderWidth: "1px",
                                                                    height: "53px",
                                                                    borderRadius: "13px"
                                                                }}>
                                                        <RiFileSearchLine/> Use Exported Data
                                                    </motion.div>

                                                </div>
                                                <div className="p-2 col-12 col-md-6">
                                                    <motion.div type="button"
                                                                whileTap={{scale:0.95}}
                                                                className="btn theme-lightBlue-button dropdown-toggle col-12 d-flex align-items-center justify-content-center"
                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false"
                                                                style={{
                                                                    height: "53px",
                                                                }}
                                                    >
                                                        <snap><BsThreeDots/> Advanced</snap>
                                                    </motion.div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-12 col-lg-7 p-2 justify-content-center">
                            <div className="row">
                                <div className=" p-1 d-flex justify-content-center ">
                                    <div className="bg-white col-11 theme-border "
                                         style={{
                                             minHeight: "400px"
                                         }}
                                    >
                                        <motion.div
                                            className=" w-100 h-100 d-flex justify-content-center align-items-center"
                                            style={{
                                                fontSize: "26px",
                                                fontWeight: "400",
                                            }}>
                                            {
                                                isLoadingImage ?
                                                    <RevolvingDot
                                                        height="100"
                                                        width="100"
                                                        radius="6"
                                                        color="#0088CA"
                                                        secondaryColor='blue'
                                                        ariaLabel="revolving-dot-loading"
                                                        radius="5"
                                                        wrapperStyle={{}}
                                                        wrapperClass=""
                                                        visible={isLoadingImage}
                                                    />
                                                    :
                                                    <div>
                                                        {isErrorImageLoading?
                                                            <div style={{
                                                                color:"red",
                                                                fontSize:"10px"
                                                            }}>
                                                                {visulizationText}
                                                            </div>
                                                            :
                                                            <div className="theme-lightBlue-text">
                                                                {visulizationText}
                                                            </div>
                                                        }

                                                    </div>
                                            }
                                        </motion.div>

                                    </div>

                                </div>
                                <div className=" col-12 col-lg-7 d-flex justify-content-center">
                                    <motion.div
                                        whileTap={{scale: 0.95}}
                                        className="btn theme-lightBlue-button col my-2 mx-1" style={{
                                        borderRadius: "13px"
                                    }}>
                                        Satellite
                                    </motion.div>
                                    <motion.div
                                        whileTap={{scale: 0.95}}
                                        className="btn theme-lightBlue-button2 col my-2 mx-1" style={{
                                        borderRadius: "13px",
                                    }}>
                                        Aircraft
                                    </motion.div>

                                    <motion.div
                                        whileTap={{scale: 0.95}}
                                        className="btn col my-2 theme-lightBlue-button2 mx-1">
                                        Aircraft
                                    </motion.div>
                                </div>
                                <div className="d-flex justify-content-center col-12 col-lg-5 ">
                                    <motion.div
                                        whileTap={{scale: 0.95}}
                                        type="button"
                                        className="btn btn-dark dropdown-toggle h-100 col-5 col-lg-12 py-3"
                                        data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false"
                                        style={{
                                            borderRadius: "13px"
                                        }}>
                                        <snap><FiDownload/> Export Data</snap>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ImportData;
