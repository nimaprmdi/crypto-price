import React from "react";

import spinner from "../assets/images/spinner.svg";

const Loader = () => {
    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center" }}>
            <img src={spinner} alt="Loader" style={{ width: "200px" }} />
        </div>
    );
};

export default Loader;
