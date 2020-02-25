import React, { Component } from 'react'

export class MovieInput extends Component {
    render() {
        return (
            <div className="bg-light py-2 px-4" id="footer">
            <form className="form-inline">
            <input className="form-control mr-sm-2 " type="text" placeholder="Title" aria-label="Title" required></input>
            <input className="form-control mr-sm-2 " type="text" placeholder="Publish Year" aria-label="PublishYear" required></input>
            <input className="form-control mr-sm-2 " type="text" placeholder="In Stock" aria-label="InStock" required></input>
            <input className="form-control mr-sm-2 " type="text" placeholder="Genre" aria-label="Genre" required></input>
            <button className="btn btn-primary my-2 my-sm-0" id="float-right" type="submit">Add Movie</button>
            </form>
            </div>
        )
    }
}

export default MovieInput
