import React from 'react';
import './Button.css'

const Button = ({text,onClick}) => {
   
  return (
      <button className="style-btn" onClick={(data)=>onClick(text)}>{text}</button>
  );
};

export default Button;
