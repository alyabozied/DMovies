import React, { Component } from 'react'
import {getMovies} from '../utility/movies';
import Counter from './counter'
export class MoviesList extends Component {
    constructor() {
        super();
        this.state = {
            movies: [{title:"",genre:{name:""},publishYear:"",numberInStock:""}]
        }
        this.movies = getMovies().then(snapShot=>{
           this.setState({movies : snapShot});
        })
    }
    
     handleDelete =(movie)=> {
        console.log(movie);
        const movies = this.state.movies.filter(m=>m.ID!==movie.ID);
        this.setState({movies});
     }
        
    
    
    render() {
        return (
            <div className="container">
                <table className="table table-dark table-hover mx-auto">
                <thead>
                    <tr>
                    <th scope="col" className="text-left">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Publish Year</th>
                    <th scope="col">In Stock</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map(movie=> (
                        <tr  key={movie.ID}>
                            <th scope="row" className="text-left">{movie.title}</th>
                            <td>{movie.genre.name}</td>
                            <td>{movie.publishYear}</td>
                            <td><Counter stock ={movie.numberInStock}/></td>
                            <td><button onClick={()=>(this.handleDelete(movie))} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        )
    }
}

export default MoviesList
