import React, { Component } from 'react'
import Card from './card'

export default class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			input: ''
		}
		this.onAddSubmit = this.onAddSubmit.bind(this)
		this.renderCards = this.renderCards.bind(this)
	}

	onAddSubmit(event) {
		this.props.onAddSubmit(event)
		this.textInput.value = ''
	}

	renderCards() {
		return this.props.cards.map((card, index) => <Card text={card} key={`card-${index}`} />)
	}
	
	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				{this.renderCards()}
				<form onSubmit={this.onAddSubmit}>
					<input type="text" onChange={this.props.onAddInputChanged} ref={(input) => { this.textInput = input; }} />
					<button type="submit">Submit</button>
				</form>
			</div>	
		);
	}	
}
