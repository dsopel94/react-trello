require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board.js';

const lists = ['List 1', 'List 2', 'List 3']

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<Board title="Board Title" lists={lists} />, document.getElementById('app'))
);		
