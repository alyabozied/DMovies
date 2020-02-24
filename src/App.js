import React, { Component } from 'react';
import './App.css';
import MoviesList from "./components/movies";
import MovieInput from './components/movieinput';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="head text-center bg-primary">
           <div className=" text-white display-1 py-auto "> D-MOVIES </div>
           <p className=" subtext badge badge-sm badge-light text-primary">BETA</p>
        </div>
       <MoviesList/>
       <MovieInput/>
      </div>
    );
  }
}

export default App;
