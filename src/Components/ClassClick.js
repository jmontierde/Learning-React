import React, { Component } from 'react'

class ClassClick extends Component {
    //Creating a function should always on top of render()
    btnClass(){ 
        console.log('Hello')
    }
  render() {
    return (
      <div>
        <button onClick={this.btnClass}>Click Class</button>
      </div>
    )
  }
}

export default ClassClick