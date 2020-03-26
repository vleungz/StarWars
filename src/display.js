import React, {useEffect, useState} from 'react';
import './App.css';
import Search from './Search';
import Attribute from "./Attribute";

const Display = () => {
    const [attributes, setAttributes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('luke');
    const [homeworld, setHomeworld] = useState('');
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.co/api/people/?search=${query}`)
            .then(response => response.json())
            .then(data =>{
                setAttributes(data.results);
                data.results.map(attribute =>(
                    fetch(`${attribute.homeworld}`)
                        .then(response => response.json())
                        .then(data =>{
                            setHomeworld(data.name);
                        })
                    ));
                data.results.map(attribute =>(
                    attribute.starships.map(starship =>(
                        fetch(`${starship}`)
                            .then(response => response.json())
                            .then(data =>{
                                setStarships(starships => [...starships, data.name]);
                            })
                    ))
                ))
            })
    }, [query]);

    const onChange = e =>{
        setSearch(e.target.value);
    };

    const onSubmit = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return(
        <div className="flexItem">
            <Search
                onChange={onChange}
                onSubmit={onSubmit}
                value={search}
            />
            <div className='attributes'>
                {attributes.map(attribute =>(
                    <Attribute
                        key={attribute.name}
                        name={attribute.name}
                        gender={attribute.gender}
                        height={attribute.height}
                        mass={attribute.mass}
                        hairColor={attribute.hair_color}
                        homeworld={homeworld}
                        starships={starships}
                    />
                ))}
            </div>
        </div>
    )
};

export default Display