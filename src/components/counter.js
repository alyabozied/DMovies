import React, { Component } from 'react'

export class Counter extends Component {
    handleIncrement =  ()=> {
        this.props.increment(this.props.id);
    }
    handleDecrement =  ()=> {
        this.props.decrement(this.props.id);
        

    }
    render() {
        let classes = "badge badge-"
        classes += (this.props.stock) ? "light" : "danger";
        return (
            <div>
                
                
                <div className="btn-group " role="group">
                <button onClick={this.handleIncrement} className="btn btn-primary btn-sm ">
                <span className={classes}>{this.props.stock}</span>   +
                    </button>
                <button onClick={this.handleDecrement} className="btn btn-warning btn-sm">-</button>
                </div>
            </div>
        )
    }
}

export default Counter
