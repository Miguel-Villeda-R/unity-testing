import React from 'react';
import './Increment.css'


export const Button = ({ children, handleClick}) => {
  
  return (
   <button className='add-button' type='button' onClick={handleClick}> {children}</button>                                                   
  );
}

export default Button;
