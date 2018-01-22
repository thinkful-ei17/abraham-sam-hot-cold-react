import React from 'react';
import Input from './input';
import Counter from './counter';

export default function Feedback(props){
  // Logic for hot/cold?
  return(
    <div className="feedback">
      <Input />
      <Counter />
    </div>
  );
  
}