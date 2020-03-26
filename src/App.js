import React from 'react';
import './App.css';
import Display from './display';

const App = () => {
    return (
        <div className='App'>
            <h1>Compare Star Wars Characters</h1>
            <div className="flexContainer">
                <Display />
                <Display />
                <Display />
            </div>
        </div>
    );
};

export default App;
