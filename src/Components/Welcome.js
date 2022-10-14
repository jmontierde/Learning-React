import React from "react";

// You can access attribute using this keywords
class Welcome extends React.Component {
    render(){ 
        return <h1>Welcome Back {this.props.name}</h1> 
    }
}

export default Welcome;