import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from "./components/Container";
import {createStore} from "redux";
import reducer from "./reducers/";

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
