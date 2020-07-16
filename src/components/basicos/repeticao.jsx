import React from 'react';
import produtos from '../../data/products';

export default (props) => {
  function getProdutosListItem() {
    return produtos.map((prod) => {
      return (
        <li key={prod.id}>
          {prod.id} - {prod.name} -&gt; R$ {prod.price}
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Repeticão</h2>
      <ul>{getProdutosListItem()}</ul>
    </div>
  );
};
