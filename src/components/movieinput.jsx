import React, { Component } from 'react'

export class MovieInput extends Component {
    constructor(){
        super();
        this.state = {};
    }
    handleChange =(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.handleAddMovie(this.state);
    }
    render() {
        return (
            <div className="bg-light py-3 px-4" id="footer">
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div id='float-left'>
                    <input className="form-control mx-4 my-1" type="text" placeholder="Title" name="title" onChange={this.handleChange} required></input>
                    <input className="form-control mx-4 my-1" type="text" placeholder="Publish Year" name="publishYear" onChange={this.handleChange} required></input>
                    <input className="form-control mx-4 my-1 " type="text" placeholder="In Stock" name="numberInStock" onChange={this.handleChange} required></input>
                    <input className="form-control mx-4 my-1" type="text" placeholder="Genre" name="genre" onChange={this.handleChange} required></input>
                </div>
            <button className="btn btn-primary my-2 my-sm-0" id="float-right" type="submit">Add Movie</button>
            </form>
            </div>
        )
    }
}

export default MovieInput
