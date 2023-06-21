import React from "react";
import { useState } from "react";

export function Condition () {
    const [condition, setCondition ] = useState ("welcome boy");
     
function clickHandler(){
    setCondition("Not Welcome pls");
    
}

    return   (
        <>
        <div>{condition}</div>
        <button onClick={() => clickHandler()}> click me</button>
        </>
    )
        
    // condition ? (
    //    <div> Welcome Emmanuel</div>  
    // ) :
    //     <div> Welcome app</div>
    
}