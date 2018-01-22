import React from 'react';
import ReactDOM from 'react-dom';
import './game.css';
import Feedback from './feedback';

export default function Game(props){
  return(
    <div className="game">
      <nav className="game-nav">
        <a href="">What</a>
        <a href="">+New Game</a> 
      </nav>
      <h1>{props.title}</h1>
      <Feedback />
    </div>
  );
}