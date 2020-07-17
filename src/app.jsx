import './app.css';
import React from 'react';
import Primeiro from './components/basicos/primeiro';
import ComParametro from './components/basicos/com-parametro.jsx';
import ComFilhos from './components/basicos/com-filhos';
import Card from './components/layout/card';
import Repeticao from './components/basicos/repeticao';
import Condicional from './components/basicos/condicional';
import CondicionalComIf from './components/basicos/condicionalComIf';
import Pai from './components/comunicacao/direta/pai';
import Super from './components/comunicacao/indireta/super';
import Input from './components/form/input';
import Contador from './components/contador/contador';

export default (props) => (
  <div className='app'>
    <h1>Fundamentos React</h1>

    <div className='cards'>
      <Card titulo='#10 - Contador' color='#293E6A'>
        <Contador passo={10} valor={100}></Contador>
      </Card>
      <Card titulo='#09 - Input' color='#9C0F5F'>
        <Input></Input>
      </Card>
      <Card titulo='#08 - Comunicação indireta' color='#000'>
        <Super></Super>
      </Card>
      <Card titulo='#07 - Comunicação direta' color='#4298B5'>
        <Pai sobrenome='Freitas'></Pai>
      </Card>
      <Card titulo='#06 - Condicional v2' color='#FA6900'>
        <CondicionalComIf numero={36} />
      </Card>
      <Card titulo='#05 - Condicional v1' color='#E94C6F'>
        <Condicional numero={15} />
      </Card>
      <Card titulo='#04 - Repetição' color='#008BBA'>
        <Repeticao></Repeticao>
      </Card>
      <Card titulo='#03 - Componente com filhos' color='#D96459'>
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo='#02 - Componente com parametro' color='#FF85CB'>
        <ComParametro titulo='Esse é o titulo' subtitulo='Esse é o subtitulo' />
      </Card>
      <Card titulo='#01 - Primeiro componente' color='#92B06A'>
        <Primeiro />
      </Card>
    </div>
  </div>
);
