import React from "react";
// Always use this keyword when inside the class
// Has render() in class then return
class Message extends React.Component { 
    constructor(){ 
        super()
        this.state = {
            //Property
            message: 'Welcome Visitor', 
            feedback: ''
        }
    }
    changeMessage() {
        this.setState({
            feedback: 'Thank you for Subscribing'
        });
    }
    render() { 
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h1>{this.state.feedback}</h1>
                <button onClick={() => this.changeMessage()}>Subscibe</button>
            </div>
        )
        

    }
}
export default Message