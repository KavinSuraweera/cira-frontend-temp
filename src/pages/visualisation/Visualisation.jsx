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
        <>
            {/*<Gradient/>*/}

            <div className="bg-primary col-12">
                <div className="row bg-success px-3 ">
                    <div className="bg-success col-6 p-2">
<div className="bg-danger">
    a
</div>
                    </div>
                    <div className="bg-danger col-6 p-2">
                        <div className="bg-success">
                            a
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Visualisation;
