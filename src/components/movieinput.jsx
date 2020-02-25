import React, { Component } from 'react'

export class MovieInput extends Component {
    constructor(){
        super();
        this.state = {title:"",publishYear:"",numberInStock:"",genre:""};
    }
    handleChange =(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const re = /^[0-9\b]+$/;
        if(re.test(this.state.numberInStock) && re.test(this.state.publishYear) )
        {
            this.setState({title:"",publishYear:"",numberInStock:"",genre:""});
            this.props.handleAddMovie(this.state);
        }
        else{
            alert("Not Valid Input");
        }
    }
    render() {
        return (
            <div className="bg-light py-3 px-4" id="footer">
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div id='float-left'>
                    <input className="form-control mx-4 my-1" value={this.state.title} type="text" placeholder="Title" name="title" onChange={this.handleChange} required></input>
                    <input className="form-control mx-4 my-1" value={this.state.publishYear} type="text" placeholder="Publish Year" name="publishYear" onChange={this.handleChange} required></input>
                    <input className="form-control mx-4 my-1 " value={this.state.numberInStock} type="text" placeholder="In Stock" name="numberInStock" onChange={this.handleChange} required></input>
                    <input className="form-control mx-4 my-1" value={this.state.genre} type="text" placeholder="Genre" name="genre" onChange={this.handleChange} required></input>
                </div>
            <button className="btn btn-primary my-2 my-sm-0" id="float-right" type="submit">Add Movie</button>
            </form>
            </div>
        )
    }
}

export default MovieInput
