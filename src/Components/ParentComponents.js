import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        parentName: 'Parent'
      }
      this.parentName = this.greetParent.bind(this);
    }
    greetParent(){ 
        alert(`Hello ${this.state.parentName}`)
    }
  render() {
    return (
      <div><ChildComponent  greetHandler={this.greetParent}/></div>
    )
  }
}

export default ParentComponents