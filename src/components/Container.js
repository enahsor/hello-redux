import React from "react";
import friends from "../images/social_friends.svg";

class Container extends React.Component{


    render(){

        return(
            <div className="container">
                <img src={friends} alt="SVG of friends interacting">
                </img>
                <h1 className="underline">{this.props.tech} Test</h1>
            </div>
        );
    }
}

export default Container;