import React, { useState } from 'react'


function WordForm({ addMadLib }){
    const [words, setWords] = useState({
        "noun1": '',
        "noun2": '',
        "adjective": '',
        "color": ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addMadLib(words);
        
    }

    const handleChange = (e) => {
        const { name, value} = e.target;
        setWords(prevWords => (
            {
            ...prevWords,
            [name]: value
            }
        ));
    }
    return (
        <form onSubmit={handleSubmit} className="flex-container">
            <input 
            type="text"
            placeholder="Noun 1"
            name="noun1"
            value={words.noun1}
            onChange={handleChange}
            className="list-item"
            />
            <input 
            type="text"
            placeholder="Noun 2"
            name="noun2"
            value={words.noun2}
            onChange={handleChange}
            className="list-item"
            />
            <input 
            type="text"
            placeholder="Adjective"
            name="adjective"
            value={words.adjective}
            onChange={handleChange}
            className="list-item"
            />
            <input 
            type="text"
            placeholder="Color"
            name="color"
            value={words.color}
            onChange={handleChange}
            className="list-item"
            />
            <button type="submit" className="list-item">Create</button>
        </form>
    );
}

export default WordForm;