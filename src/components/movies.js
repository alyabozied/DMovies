import React, { Component } from 'react'
import {getMovies} from '../utility/movies';

export class MoviesList extends Component {
    constructor() {
        super();
        this.movies = getMovies().then(snapShot=>{
           this.setState(snapShot);
        })
    }
 
    
    render() {
        console.log(this.state);
        return (
            <div>

            </div>
        )
    }
}

export default MoviesList
