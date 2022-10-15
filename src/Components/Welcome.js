import React from "react";

// You can access attribute using this keywords
class Welcome extends React.Component {
    constructor(){
        super()
        this.state = { 
            output: ''
        }
     
    }
    btnClick(){ 
        this.setState( // Set a value from state 
        {
            output: 'Hello'
        })
    }
    render(){ 
        // const{err,output} = this.state
        const {name} = this.props // Deconstruction the class
        const {output} = this.state;
        return(
            <div>
                <h1>Welcome Back {name}</h1> 
                <h1>This: {output}</h1>
                <button onClick={() => {this.btnClick()}}>CLick</button>
            </div>
        ) 
    }
}
export default Welcome;