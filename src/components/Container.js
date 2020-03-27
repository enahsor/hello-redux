import React from "react";
import donut from "../images/donut.svg";

class Container extends React.Component{


    render(){

        return(
            <div className="container">
                <img src={donut} alt="SVG of friends interacting">
                </img>
                <h1>
                    <span className="highlight">{this.props.tech}</span> Test</h1>
            </div>
        );
    }
}

export default Container;