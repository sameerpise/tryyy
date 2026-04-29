import React from "react";
import Aprsnt from "../Aparnt";
import Change from "./UseState";

function BChild({val,passFunction}){
const names ="xyz"
    return(
        <>
        {val}
        <button onClick={passFunction}>increase</button>
        <Change username={names} />
        </>
    )
}
export default BChild