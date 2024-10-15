import React, { useState } from 'react';

const Buscador = ({ onBuscador }) => {
  const [query, setQuery] = useState('');

  const handleBuscador = (e) => {
    e.preventDefault();
    onBuscador(query); 
  };

  return (
    <form onSubmit={handleBuscador}>
      <input className="barra-busqueda"
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Buscar Personaje...'
      />
      
      <button class="buscar" type='submit'>Buscar</button>
    </form>
  );
};

export default Buscador;
