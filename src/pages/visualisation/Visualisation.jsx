import React from 'react';
import "./assets/css/Visualisation.css"
import {BsFillPlayFill} from "react-icons/bs";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {Input, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import BgImg1 from "../../components/Backgrounds/BgImg1";
import Gradient from "../../components/Backgrounds/Gradient";


const Visualisation = () => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    return (
        <div className="w-100">
            {/*<Gradient/>*/}

            <div className="bg-primary col-12 w-100">
                <div className="bg-success p-3">
                    <div className="row bg-light p-2">
                        <div className="col-6 bg-success p-2">
                            <div className="bg-primary p-1">
                                a
                            </div>
                        </div>
                        <div className="col-6 bg-success p-2">
                            <div className="bg-primary p-1">
                                a
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Visualisation;
