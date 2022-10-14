import React from "react";
//Props
// immutable or the value cannot be change
// Get Passed to the component
const Greet = (props) => { 
    return(
        <div>
            <h1>Kamusta {props.name} SuperHeroe: {props.hero}</h1> 
            <h2>{props.children}</h2>
        </div>
        
    )
}
export default Greet