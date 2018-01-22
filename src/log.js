import React from 'react';

export default function Log(props){
    
    const guesses = props.guesses.map((guess, index) => 
        <li key={index}>
            {guess}
        </li>
    );

    return(
        <ul>
            {guesses}
        </ul>
    );
}