import React from 'react';
import './App.css';
import {getMovies,findMovie} from './utility/movies.js';

function App() { 
findMovie(4).then(d=>{
  console.log(d);
})
  return (
    <main className = "container" >
    </main>
  );
}
export default App;
