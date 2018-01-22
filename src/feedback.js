import React from 'react';
import './feedback.css';
import Input from './input';
import Counter from './counter';
import Log from './log';

export default function Feedback(props){
  // Logic for hot/cold?
  return(
    <div className="feedback">
      <h2>{props.message}</h2>
      <Input />
      <Counter />
      <Log />
    </div>
  );
}

Feedback.defaultProps = {
  message: "Make your Guess!"
};