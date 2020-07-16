import './app.css';
import React from 'react';
import Primeiro from './components/primeiro';
import ComParametro from './components/com-parametro.jsx';
import ComFilhos from './components/com-filhos';
import Card from './components/layout/card';

export default (props) => (
  <div className='app'>
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

    {/* <ComFilhos>
			<ul>
				<li>Ana</li>
				<li>Bia</li>
				<li>Carlos</li>
				<li>Daniel</li>
			</ul>
		</ComFilhos> */}
    {/* <Primeiro />
		<ComParametro
			titulo='Esse é o titulo'
			subtitulo='Esse é o subtitulo' />
		<ComParametro
			titulo='Opa'
			subtitulo='Epa' /> */}
  </div>
);
