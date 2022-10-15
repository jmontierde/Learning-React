import React from "react";
//Props
// immutable or the value cannot be change
// Get Passed to the component
const Greet = (props) => { 
    const {name, hero,children } = props; // Deconstructor the props
    return(
        <div>
            <h1>Kamusta {name} SuperHeroe: {hero}</h1> 
            <div>
                <h5>{children}</h5>
                <h5>{children}</h5>
            </div>

        </div>
    )
}
export default Greet