import React from "react";
import { useLocation } from "react-router-dom";

function Mainpage() {
    const location = useLocation()
    const name = location.state.name

    return (
        <div>
           <h1>{name}님 환영합니다 </h1>
        </div>
    )
}

export default Mainpage