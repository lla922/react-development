// Button.js
import React from 'react';
import './Buttons.css';


function Button(props) {
  const { label, onClick } = props;

  return (
    <button className='custom-button' onClick={onClick}>{label} 
    <img src="/images/search-icon.svg" alt="Search Icon" class="icon"/>
    </button>
  );
}

export default Button;
