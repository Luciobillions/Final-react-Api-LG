import React, { useEffect, useState } from 'react';
import Buscador from '../components/Buscador';
import Cards from '../components/Cards'; 

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header>
        <img src="./public/titulo.gif" alt="" />
      </header>
      <Buscador onBuscador={handleSearch} />
      <div className="card-container">
        {filteredCharacters.map(character => (
          <Cards key={character.id} character={character} /> 
        ))}
      </div>
    </div>
  );
};

export default Home;
