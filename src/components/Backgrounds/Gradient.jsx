import React from "react"

const Gradient = () => {
    return(

            <div
                className="position-fixed  h-100 w-10 top-0" style={{
                    height: "100px",
                    zIndex: "-100",
                    backgroundImage: "linear-gradient(45deg, #ffffff 0%, #FFEBE0 100%, #ffffff 100%",
                    // filter: "blur(200px)",
                    width : "100px",
                    position :"fixed",
                    backgroundSize:"cover"
            }}>
            </div>
    )
}

export default Gradient;
