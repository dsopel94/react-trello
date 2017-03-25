import React from 'react';
import ListContainer from './list-container.js'
export default function Board(props) {

	const lists = props.lists.map((item, index) => <ListContainer key={`list-${index}`} />) 
	
	return (
		<div className="board">
			<h1>{props.title}</h1>
			{lists}
		</div>
	);
}