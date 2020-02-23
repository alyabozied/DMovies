import React from 'react';
import './App.css';
import database from './config/firebaseConfig';
const movielist =  database.collection("movies-list");


function App() { 
  movielist.get().then((d)=>{
    d.docs.forEach(doc=>{
      console.log(doc.data());
    });
  })
  return (
    <main className = "container" >
    </main>
  );
}
export default App;
