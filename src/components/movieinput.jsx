import React, { Component } from 'react'

export class MovieInput extends Component {
    render() {
        return (
            <div className="container">
            <form class="form-inline">
            <input class="form-control mr-sm-2" type="text" placeholder="Title" aria-label="Title" required></input>
            <input class="form-control mr-sm-2" type="text" placeholder="Publish Year" aria-label="PublishYear" required></input>
            <input class="form-control mr-sm-2" type="text" placeholder="In Stock" aria-label="InStock" required></input>
            <input class="form-control mr-sm-2" type="text" placeholder="Genre" aria-label="Genre" required></input>
            <button class="btn btn-primary my-2 my-sm-0" type="submit">Add Movie</button>
            </form>
            </div>
        )
    }
}

export default MovieInput
