import React from 'react';
import ReactDOM from 'react-dom';
import Feedback from './feedback';

export default function Game(props){
  return(
    <div className="game">
      <h1>{props.title}</h1>
      <a href="#">What</a>
      <a href="#">+New Game</a> 
      <Feedback />
    </div>
  );
}