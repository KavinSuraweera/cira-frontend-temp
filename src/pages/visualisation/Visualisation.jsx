import React, {useState} from 'react';
import "./assets/css/Visualisation.css"
import Gradient from "../../components/Backgrounds/Gradient";
import {GrLocation} from "react-icons/gr";
import {AiFillCaretRight} from "react-icons/ai";
import Slider from '@mui/material/Slider';
import {styled} from '@mui/material/styles';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ReactSlider from "react-slider";

import Select from "react-select";
import DatePicker from "react-multi-date-picker";

import "react-datepicker/dist/react-datepicker.css";
import {RiFileSearchLine} from "react-icons/ri";
import {BsThreeDots} from "react-icons/bs";


function GrLocat() {
    return null;
}

const Visualisation = () => {

    const [startDate, setStartDate] = useState(new Date());

    const [values, setValues] = React.useState({
        amount: '', password: '', weight: '', weightRange: '', showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const PrettoSlider = styled(Slider)({
        color: '#FEBDA0',
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
            backgroundColor: '#FEBDA0',
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


    // const [products, setProducts] = useState[2,3,2];


    return (
        <div className="">
            <Gradient/>

            <div className="  ">
                <div className="px-5 " style={{width: "98%"}}>
                    <div className="row  p-2 ">
                        <div className="col-6  p-2">
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
                                            Sky Coordinates
                                            <span className="mx-2" style={{
                                                fontWeight: "400",
                                                fontSize: "14px",
                                                color: "#FEBDA0"
                                            }}>
                                             Origin of the visualisation
                                        </span>
                                        </div>
                                        <div className="row">
                                            <div className="col-9 m-0 ">
                                                <div className="bg-white "
                                                     style={{
                                                         borderRadius: "13px",
                                                         boxShadow: "0px 4px 10px rgba(254, 189, 160, 0.2)"
                                                     }}>
                                                    <div className="input-group m-0 row">
                                                        <div
                                                            className="input-group-prepend col-1 d-flex align-items-center justify-content-center"
                                                            style={{height: "53px"}}>
                                                            <label className=""
                                                                   htmlFor=""><GrLocation/></label>
                                                        </div>
                                                        <select className="form-select m-0 col-11"
                                                                id="inputGroupSelect01"
                                                                style={{
                                                                    borderStyle: "solid",
                                                                    borderWidth: "0",
                                                                    borderRadius: "13px"
                                                                }}>
                                                            <option selected>Choose...</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        {/*<Select*/}
                                                        {/*    className="basic-single"*/}
                                                        {/*    classNamePrefix="select"*/}
                                                        {/*    // defaultValue={colourOptions[0]}*/}
                                                        {/*    // isDisabled={isDisabled}*/}
                                                        {/*    // isLoading={isLoading}*/}
                                                        {/*    // isClearable={isClearable}*/}
                                                        {/*    // isRtl={isRtl}*/}
                                                        {/*    // isSearchable={isSearchable}*/}
                                                        {/*    name="color"*/}
                                                        {/*    // options={colourOptions}*/}
                                                        {/*/>*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3 ">
                                                <button className="btn btn-dark h-100 w-100"
                                                        style={{
                                                            borderRadius: "13px"
                                                        }}>
                                                    Visualise <span><AiFillCaretRight/></span>
                                                </button>
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
                                            <span className="mx-2" style={{
                                                fontWeight: "400",
                                                fontSize: "14px",
                                                color: "#FEBDA0"
                                            }}>
                                               Location of the array
                                        </span>
                                        </div>
                                        <div className="bg-white"
                                             style={{
                                                 borderRadius: "13px",
                                                 boxShadow: "0px 4px 10px rgba(254, 189, 160, 0.2)"
                                             }}>
                                            <div className="input-group m-0 row">
                                                <div
                                                    className="input-group-prepend col-1 d-flex align-items-center justify-content-center"
                                                    style={{height: "53px"}}>
                                                    <label className=""
                                                           htmlFor=""><GrLocation/></label>
                                                </div>
                                                <select className="form-select m-0 col-11 p-2" id="inputGroupSelect01"
                                                        style={{
                                                            borderStyle: "solid",
                                                            borderWidth: "0",
                                                            borderRadius: "13px"
                                                        }}>
                                                    <option selected>Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {/* --------- input row 3-----------*/}

                                    <div className="col-12 my-5">
                                        <div className="row">
                                            <div className="col-6 ">
                                                <div className="my-2"
                                                     style={{
                                                         fontWeight: "600",
                                                         fontSize: "20px",
                                                         color: "#1A1A1A"
                                                     }}
                                                >
                                                    Start Date
                                                </div>

                                                <div className="bg-white"
                                                     style={{
                                                         borderRadius: "13px",
                                                         boxShadow: "0px 4px 10px rgba(254, 189, 160, 0.2)"
                                                     }}>
                                                    <div className="input-group m-0 row">
                                                        <div
                                                            className="input-group-prepend col-1 d-flex align-items-center justify-content-center"
                                                            style={{height: "53px"}}>
                                                            <label className=""
                                                                   htmlFor=""><GrLocation/></label>
                                                        </div>

                                                        <div className="col-11">
                                                            <input
                                                                className="w-100 h-100"
                                                                type="date"
                                                                style={{
                                                                    borderStyle: "solid",
                                                                    borderWidth: "0"
                                                                }}
                                                            />
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 ">

                                                <div className="my-2"
                                                     style={{
                                                         fontWeight: "600",
                                                         fontSize: "20px",
                                                         color: "#1A1A1A"
                                                     }}
                                                >
                                                    End Date
                                                </div>

                                                <div className="bg-white"
                                                     style={{
                                                         borderRadius: "13px",
                                                         boxShadow: "0px 4px 10px rgba(254, 189, 160, 0.2)"
                                                     }}>
                                                    <div className="input-group m-0 row">
                                                        <div
                                                            className="input-group-prepend col-1 d-flex align-items-center justify-content-center"
                                                            style={{height: "53px"}}>
                                                            <label className=""
                                                                   htmlFor=""><GrLocation/></label>
                                                        </div>

                                                        <div className="col-11">
                                                            <input
                                                                className="w-100 h-100"
                                                                type="date"
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
                                            <span className="mx-2" style={{
                                                fontWeight: "400",
                                                fontSize: "14px",
                                                color: "#FEBDA0"
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
                                                <button className="btn btn-light w-auto"
                                                        style={{
                                                            backgroundColor: "#fff",
                                                            boxShadow: "0px 4px 10px rgba(254, 189, 160, 0.4)",
                                                            height: "53px"
                                                        }}>
                                                    <RiFileSearchLine/> Use Exported Data
                                                </button>
                                                <div className="btn-group w-auto">
                                                    <button type="button" className="btn  dropdown-toggle"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false"
                                                            style={{
                                                                backgroundColor: " #FEBDA0",
                                                                color: "#fff"
                                                            }}>
                                                        <snap><BsThreeDots/> Advanced</snap>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-6  p-2">
                            <div className=" p-1 d-flex justify-content-center">
                                <div className="bg-white col-10"
                                     style={{
                                         borderRadius: "22px",
                                         height: "500px",
                                         width: "500px",
                                         boxShadow: "0px 4px 10px rgba(254, 189, 160, 0.2)"
                                     }}
                                >
                                    <div className=" w-100 h-100 d-flex justify-content-center align-items-center"
                                         style={{
                                             fontSize: "26px",
                                             fontWeight: "400",
                                             color: "#FEBDA0"
                                         }}>
                                        Visualisation
                                    </div>

                                </div>

                                {/*    ---------- buttons ----------*/}

                                <div className="col-12">
                                    <div className="row">
                                        <dov ></dov>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Visualisation;
