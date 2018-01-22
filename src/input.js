import React from 'react';

export default function Input(){
    return(
        <div className="input">
            <input className="guess-field" type="text" placeholder="Enter Your Guess" />
            <input className="guess-button" type="submit" value="Guess"/>
        </div>
    );
}