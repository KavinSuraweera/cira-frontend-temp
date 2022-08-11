import React from 'react';
import "./assets/css/Visualisation.css"
import {BsFillPlayFill} from "react-icons/bs";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {Input, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";


const Visualisation = () => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <>
            <div className=" " style={{
                backgroundImage: "linear-gradient(45deg, #ffffff 0%, #FFEBE0 100%, #ffffff 100%",
                // filter: "blur(200px)",
                width : "100px",
                position :"fixed",
                height: "100%",
                zIndex: "-10"
            }}>

            </div>
            <div>
                <div className="px-5">
                    <div className="px-5">
                        <div>

                        </div>
                        <div className="">
                            <div className="row   py-4 ">

                                <div className="col-6 p-1">
                                    <form>
                                        <div className="p-1  ">
                                            <div className="form-group card-label">
                                                <label className="form-label"
                                                       style={{
                                                           fontWeight: "600",
                                                           fontSize: "20px"
                                                       }}>

                                                    Sky Coordinates <span className="secondary-label">  Origin of the visualisation </span>

                                                </label>
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <TextField
                                                                id="input-with-icon-textfield"
                                                                hiddenLabel="a"
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            <AttachMoneyIcon />
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                            <div className="invalid">
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <button className="btn btn-dark px-4"
                                                                    style={{height: "53px"}}>
                                                                Visualise <BsFillPlayFill/>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-6 p-1">
                                    <div className="p-1 bg-danger">
                                        a
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Visualisation;
