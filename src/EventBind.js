import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){ 
        super(props)
        this.state = { 
            output: "Hello"
        }
        this.eventBinding = this.eventBinding.bind(this); // Most used to bind the event handler
                                                         // Binding in the constructor
    }
    // eventBinding(){ // if the event is undefined you should use Binding Evenet Handlers
    //     this.setState({ 
    //         output: 'Hi'
    //     });
    //     console.log(this)
    // }
    // eventBinding = () => { // It is still on experiment
    //     this.setState = ({
    //         output: 'Hi'
    //     })
    // }
  render() {
    // const {output} = this.state;
    return (
      <div>
        <h1>{this.state.output}</h1>
        {/* <button onClick={this.eventBinding.bind(this)}>Click Me</button> */}
        {/* <button onClick = {() => this.eventBinding()}>Click Me</button> */} 
        <button onClick={this.eventBinding}>Click</button>

      </div>
    )
  }
}

export default EventBind