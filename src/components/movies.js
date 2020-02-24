import React, { Component } from 'react'
import {getMovies} from '../utility/movies';

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
 
    
    render() {
        console.log(this.state);
        return (
            <div className="container">
                <table className="table table-dark table-hover mx-auto">
                <thead>
                    <tr>
                    <th scope="col" className="text-left">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Publish Year</th>
                    <th scope="col">In Stock</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map(movie=> (
                        <tr>
                            <th scope="row" className="text-left">{movie.title}</th>
                            <td>{movie.genre.name}</td>
                            <td>{movie.publishYear}</td>
                            <td>{movie.numberInStock}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        )
    }
}

export default MoviesList
