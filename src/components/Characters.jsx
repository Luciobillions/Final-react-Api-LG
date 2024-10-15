import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Characters = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null); 

    useEffect(() => {
        const fetchCharacter = async () => { 
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            setCharacter(data); // Almacena el personaje individual
        };
        fetchCharacter();
    }, [id]);

    if (!character) return <div>Cargando</div>; 
    
    return (
        <div>
            <h2>{character.name}</h2> 
            <img src={character.image} alt={character.name} />
            <p>Estado: {character.status}</p> 
            <p>Specie: {character.species}</p> 
            <p>Genero: {character.gender}</p> 
            <p>Origen: {character.origin.name}</p> 
            {/* botton para ver el json  */}
            <button onClick={() => window.open(`https://rickandmortyapi.com/api/character/${id}`, '_blank')}>
                Ver JSON
                
            </button>
        </div>
    );
}

export default Characters;
