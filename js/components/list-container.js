import List from './list.js'
import React, { Component } from 'react'

export default class ListContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			input: '',
			cards: []
		}
		this.onAddSubmit = this.onAddSubmit.bind(this)
		this.onAddInputChanged = this.onAddInputChanged.bind(this)
	}

	onAddSubmit(event) {
		event.preventDefault();
		this.setState({
			cards: [...this.state.cards, this.state.input]
		})
	}

 	onAddInputChanged(event) {
		this.setState({
			input: event.target.value
		})
	}

	render() {
		return <List cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} />
	}
}