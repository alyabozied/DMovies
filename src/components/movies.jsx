import React, { Component } from 'react'
import {getMovies , findMovie , addMovie,deleteMovie,reset} from '../utility/movies';
import Counter from './counter'
import MovieInput from './movieinput'
export class MoviesList extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
        this.movies = getMovies().then(snapShot=>{
           this.setState({movies : snapShot});
        })
    }
    
    handleDelete =(movie)=> {
        console.log(movie);
        deleteMovie(movie.ID);
        const movies = this.state.movies.filter(m=>m.ID!==movie.ID);
        this.setState({movies});
     }
     handleIncrement =  (id)=> {
        let movies = this.state.movies;
        var i = movies.findIndex(m => m.ID === id);
        movies[i].numberInStock++;
        this.setState({movies})
    }
    handleDecrement =  (id)=> {
        let movies = this.state.movies;
        var i = movies.findIndex(m => m.ID === id);
        if(movies[i].numberInStock)
            {movies[i].numberInStock--;
            this.setState({movies})}
    }  
    handleAddMovie = (movie)=>{
        let movieID = {...movie , ID: this.state.movies.length};
        console.log(movieID);
        let foundMovie =this.state.movies.filter(m=>(m.title===movieID.title && m.publishYear===movieID.publishYear ))
        if(foundMovie.length)
        {
           this.handleIncrement(foundMovie[0].ID);
        }
        else{
            let movies = this.state.movies;
            movies.push( movieID);
            this.setState({movies});
        }
        
    }
    handleReset()
    {
        console.log("reset");
        reset().then(()=>{
            this.movies = getMovies().then(snapShot=>{
                this.setState({movies : snapShot});
             })
        });
    }
    render() {
        return (
            <React.Fragment>
            <div className="container">
                <table className="table table-hover mx-auto">
                <thead>
                    <tr>
                    <th scope="col" className="text-left">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Publish Year</th>
                    <th scope="col">In Stock</th>
                    <th scope="col"><button onClick={()=>(this.handleReset())} className="btn btn-success btn-sm">RESET</button></th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map(movie=> (
                        <tr  key={movie.ID} className={(movie.numberInStock) ? "" : "table-danger"}>
                            <th scope="row" className="text-left">{movie.title}</th>
                            <td>{movie.genre}</td>
                            <td>{movie.publishYear}</td>
                            <td><Counter id ={movie.ID} stock ={movie.numberInStock} increment ={this.handleIncrement} decrement ={this.handleDecrement}/></td>
                            <td><button onClick={()=>(this.handleDelete(movie))} className="btn btn-danger btn-sm">DELETE</button></td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
              <MovieInput handleAddMovie={this.handleAddMovie}/>
              </React.Fragment>
        )
    }
}

export default MoviesList
