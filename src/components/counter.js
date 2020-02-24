import React, { Component } from 'react'

export class Counter extends Component {
    handleIncrement =  ()=> {
        console.log('+')
    }
    handleDecrement =  ()=> {
        console.log('-')

    }
    render() {
        return (
            <div>
                
                
                <div className="btn-group " role="group">
                <button onClick={this.handleIncrement} className="btn btn-primary btn-sm ">
                <span className="badge badge-light">{this.props.stock}</span>   +
                    </button>
                <button onClick={this.handleDecrement} className="btn btn-warning btn-sm">-</button>
                </div>
            </div>
        )
    }
}

export default Counter
