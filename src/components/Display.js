import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <input className="col-md-9" type="text" name="expression" value={this.props.calcExpression} readOnly />
                    <input className="col-md-3" type="text" name="calcResult" value={this.props.calcResult} readOnly />
                </div>
            </div>
        )
    }
}

export default Display;
