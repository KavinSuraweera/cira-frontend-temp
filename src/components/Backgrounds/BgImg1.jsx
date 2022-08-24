import React from "react"

const BgImg1 = () => {
    return(
        <>
            <div
                className="position-fixed  h-100 w-100 top-0" style={{
                height: "100px",
                zIndex: "-100",
                backgroundImage: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(225,225,225,1) 20%, rgba(66,66,66,0.5) 60%, rgba(0,0,0,0.5) 100%), url('/assets/images/EDA-crop.jpeg')",
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat",
                width : "100px",
                position :"fixed"
            }}>

            </div>
        </>
    )
}

export default BgImg1;
