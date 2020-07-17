import React from 'react';

export default (props) => {
  return (
    <div>
      <label htmlFor='passoInput'>passo: </label>
      <input
        id='passoInput'
        type='number'
        value={props.passo}
        onChange={(e) => props.onPassoChange(+e.target.value)}
      />
    </div>
  );
};
