import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
            <div className="container text-center">
                {
                    this.props.buttons.map((row, rowIndex) => {
                        return (
                            <div className="row" key={rowIndex}>
                                { row.map((button, btnIndex) => {
                                    return <button className="calcButtons btn btn-primary btn-lg" key={btnIndex} onClick={() => { this.props.handleClick(button) }}> { button } </button>
                                })}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Buttons;
