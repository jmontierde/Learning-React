import React, { Component } from 'react'

// setState
//rce shortcut for creating components 
class Counter extends Component {
    // to create fast constructor use sconst
    constructor(){ 
        super()
        this.state = {
            count: 0
        }
    }
    // Never modified a state directly because it will render the components
    Increment(){ 

        // this.setState( // Set a value from state 
        // {
        //     count: this.state.count + 1
        // }, () => { // Second parameter will be the callback function
        //     console.log('Callback value:', this.state.count);
        // }
        // ) 
        this.setState((prevState) =>({ // Use funtion to access the previous state to calculate new state
          count: prevState.count + 1
        }));
    }
    Decrement(){
        // this.setState({
        //     count: this.state.count - 1,
        // })
        this.setState((prevState) => ({
          count: prevState.count - 1
        }))
    }
    IncrementFive(){ 
      this.Increment();
      this.Increment();
      this.Increment();
      this.Increment();
      this.Increment();
    }
    DecrementFive(){ 
      this.Decrement();
      this.Decrement();
      this.Decrement();
      this.Decrement();
      this.Decrement();

    }

  render() {
    return (
      <div>
        <h1>Counter Application</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => {this.IncrementFive()}}>Increment</button>
        <button onClick={() => {this.DecrementFive()}}>Decrement</button>
      </div>
    )
  }
  
}

export default Counter