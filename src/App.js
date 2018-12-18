import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Buttons from './components/Buttons';

class App extends Component {
	state = {
		calcResult: 0,
		buttons: [
			[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9, "+", "-", "*"],
			["/", "=", "Clear"]
		],
		expression: "",
	};

	handleClick = value => {
		this.setState({
			expression: this.state.expression + value
		});

		if (value === "=") this.calculateExpression()
		if (value === "Clear") {
			this.setState({
				calcResult: 0,
				expression: ""
			})
		}
	}

	calculateExpression = () => {
		this.setState({
			calcResult: this.parseExpression(this.state.expression)
		})
	}

	parseExpression = (exp) => {
		return Function(`"use strict"; return (${exp})`)();
	}

	render() {
		const { calcResult, expression, buttons } = this.state;

		return (
			<div className="container">
				<h1>React Calculator</h1>
				<div className="calculator col-md-3 col-md-offset-4 text-center" >
					<Display calcResult={calcResult} calcExpression={expression} />
					<Buttons buttons={buttons} handleClick={ this.handleClick } />
				</div>
			</div>
		)
	}
}

export default App;
