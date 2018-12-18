import React, { Component } from 'react';

class Buttons extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.props.buttons.map((button, i) => {
                            return (
                                
                                <button
                                    key={i}
                                    className="btn btn-primary"
                                    onClick={() => { this.props.handleClick(button) }}>
                                    {button}
                                </button>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

// const btns = (props) => {

//     const buttons =
// }

// class Table extends Component {
//     render() {
//         const { characterData, removeCharacter } = this.props;

//         return (
//             <table>
//                 <TableHeader />
//                 <TableBody
//                     characterData={ characterData }
//                     removeCharacter={ removeCharacter }
//                 />
//             </table>
//         );
//     }
// }

// const TableHeader = () => {
//     return (
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Job</th>
//                 <th>Delete</th>
//             </tr>
//         </thead>
//     );
// }

// const TableBody = props => {

//     const rows = props.characterData.map((row, index) => {
//         return (
//             <tr key={index}>
//                 <td>{row.name}</td>
//                 <td>{row.job}</td>
//                 <td><button onClick={() => props.removeCharacter(index)}> Delete </button></td>
//             </tr>
//         );
//     });

//     return <tbody>{rows}</tbody>;
// }

export default Buttons;
