import React from 'react';
import './counter.css';

export default function Counter(props){
  return(
    <div className="counter">
      Guess #<span className="count">{props.counter}</span>!
    </div>
  );
}

Counter.defaultProps = {
  counter: 0,
};