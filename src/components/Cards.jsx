import React from 'react';
import { Link } from 'react-router-dom';
const Cards = ({character}) => {
    return (
        <div className='card'>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <hr />
            <p>Estado: {character.status}</p>
            <hr />
            <p>Specie: {character.species}</p>
            <hr />
           <button>
            <Link to={`/character/${character.id}`}>Ver detalles</Link>
            </button>
        </div>
    );
}

export default Cards;
