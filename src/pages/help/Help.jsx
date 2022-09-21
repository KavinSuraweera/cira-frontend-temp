import React from "react";
import DataTable from 'react-data-table-component';
import Gradient from "../../components/Backgrounds/Gradient";
import "./assets/css/Help.css"

const Help = () => {

    const columns = [
        {
            name: 'Column',
            selector: row => row.index,
        },
        {
            name: 'Description',
            selector: row => row.desc,
        },
    ];

    const data = [
        {
            id: 1,
            index: '1',
            desc: 'Line number of of Element Data',
        },
        {
            id: 2,
            index: '3-7',
            desc: 'Satellite Number',
        },
        {
            id: 3,
            index: '8',
            desc: 'Classification (U=Unclassified)',
        },
        {
            id: 4,
            index: '10-11',
            desc: 'International Designator (Last two digits of launch year)',
        },
        {
            id: 5,
            index: '12-14',
            desc: 'International Designator (Last two digits of launch year)',

        },
        {
            id: 6,
            index: '15-17',
            desc: 'International Designator (Piece of the launch)',
        },
        {
            id: 7,
            index: '19-20',
            desc: 'Epoch year (Last two digits of the year)',

        },
        {
            id: 8,
            index: '21-32',
            desc: 'Epoch (Day of the year and fractional portion of the day)',
        },
        {
            id: 9,
            index: '34-43',
            desc: 'First time derivative of the mean motion',

        },
        {
            id: 9,
            index: '45-52',
            desc: 'Second time derivative of the mean motion (Leading decimal point assumed)',

        },
        {
            id: 6,
            index: '54-61',
            desc: 'BSTAR drag term (Leading decimal point assumed)',
        },
        {
            id: 7,
            index: '63',
            desc: 'Ephemeris type',

        },
    ]


    return(
        <div className="w-100">
            {/*<Gradient/>*/}

            <div className="bg-primary col-12 w-100">

                <div className="bg-success p-3">
                    <div className="row bg-light p-2">

                        {/* --------- TLE Data Format -----------*/}
                        <div className="col-6 bg-success p-2">
                            <div className="bg-primary p-1">
                                <div className="bg-white" style={{borderRadius:"13px"}}>
a
                                </div>
                            </div>
                        </div>

                        {/* --------- TLE Data Format explanation table-----------*/}


                        <div className="col-6 bg-success p-2">
                            <div className="bg-primary p-1">
                                <div className="bg-primary ">
                                    <div>
                                        <DataTable
                                            columns={columns}
                                            data={data}
                                        />
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Help;
