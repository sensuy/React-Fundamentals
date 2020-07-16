import './app.css';
import React from 'react';
import Primeiro from './components/basicos/primeiro';
import ComParametro from './components/basicos/com-parametro.jsx';
import ComFilhos from './components/basicos/com-filhos';
import Card from './components/layout/card';
import Repeticao from './components/basicos/repeticao';
import Condicional from './components/basicos/condicional';
import CondicionalComIf from './components/basicos/condicionalComIf';

export default (props) => (
  <div className='app'>
    <Card titulo='#06 - Condicional v2'>
      <CondicionalComIf numero={36} />
    </Card>
    <Card titulo='#05 - Condicional v1'>
      <Condicional numero={15} />
    </Card>
    <Card titulo='#04 - Repetição'>
      <Repeticao></Repeticao>
    </Card>
    <Card titulo='#03 - Componente com filhos'>
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo='#02 - Componente com parametro'>
      <ComParametro titulo='Esse é o titulo' subtitulo='Esse é o subtitulo' />
    </Card>
    <Card titulo='#01 - Primeiro componente'>
      <Primeiro />
    </Card>
  </div>
);
