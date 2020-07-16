import React from 'react';
import './card.css';

export default (props) => (
  <div className='card'>
    <div className='content'>{props.children}</div>
    <div className='footer'>{props.titulo}</div>
  </div>
);
