import React from 'react';
import './App.css';

const Attribute = ({name, gender, height, mass, hairColor, homeworld, starships}) =>{
    return(
        <div className='attribute'>
            <h1>{name}</h1>
            <p>Gender: {gender}</p>
            <p>Height: {height}cm</p>
            <p>Mass: {mass}kg</p>
            <p>Hair Color: {hairColor}</p>
            <p>Homeworld: {homeworld}</p>
            <p>Starships:</p>
            <ul>
                {starships.map((starship, i) =>(
                    <li key={i}><span>{starship}</span></li>
                ))}
            </ul>
        </div>
    )
};

export default Attribute;