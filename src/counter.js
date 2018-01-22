import React from 'react';

export default function Counter(props){
  return(
    <div className="counter">
      <h3>Guess #{props.counter}</h3>
    </div>
  );
}

Counter.defaultProps = {
  counter: 0,
};