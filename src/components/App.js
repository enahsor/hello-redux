import React from 'react';
import Container from "./Container";
import {createStore} from "redux";
import reducer from "../reducers";

const initialState = {tech: "React"}
const store = createStore(reducer, initialState);

class App extends React.Component{
  
  render(){

    return(
      <Container tech={store.getState().tech}/>
    )
  }
}

export default App;
