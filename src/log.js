import React from 'react';
import './log.css';

export default function Log(props){
    
  const guesses = props.guesses.map((guess, index) => 
    <li key={index}>
      {guess}
    </li>
  );

  return(
    <ul className="log">
      {guesses}
    </ul>
  );
}

Log.defaultProps = {
  guesses: [50 ,25 ,12],
};