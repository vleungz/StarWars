import React from 'react';
import './App.css';

const Search = ({ onChange, onSubmit, value }) =>
    <form onSubmit={onSubmit}>
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
        <button
            type="submit"
            className="SearchButton">
            Search
        </button>
    </form>;

export default Search;