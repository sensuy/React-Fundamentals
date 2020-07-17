import React, { useState } from 'react';

export default (props) => {
  const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0));
  function gerarNumerosNaoContidos(array) {
    const min = 1;
    const max = 60;
    const novoNumero = parseInt(Math.random() * (max - min)) + 1;

    return array.includes(novoNumero) ? gerarNumerosNaoContidos(array) : novoNumero;
  }

  function gerarNumeros() {
    const novoArray = Array(props.qtdeNumero)
      .fill(0)
      .reduce((a, e) => {
        const novoNumero = gerarNumerosNaoContidos(a);
        return [...a, novoNumero];
      }, [])
      .sort((a, b) => a - b);
    setNumeros(novoArray);
  }

  return (
    <>
      <h3>Mega</h3>
      <h4>{numeros.join('-')} </h4>
      <button onClick={gerarNumeros}>Gerar Números</button>
    </>
  );
};
