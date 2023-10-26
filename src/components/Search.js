import React, { useState } from 'react';
import '../styles/Search.css';
import Pagination from './Pagination';
import data from './Mockdata';

function Search() {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState(data);

    const handleOpenSearch = () => {
        setShow(true);
    };

    const handleCancelButton = () => {
        setShow(false);
    };

    const handleSearchButton = () => {
        setShow(false);
        // Example search logic
        setContent(data.filter((item) => item.name.includes("Bha")));
    };

    return (
        <div className='wrapper' style={{ filter: show ? 'blur(4px)' : '' }}>
            <div style={{ display: show ? 'none' : 'block' }}>
                <button onClick={handleOpenSearch}>Search</button>
            </div>

            {content.map((data, key) => (
                <div key={key}>
                    <h1>{data.name}</h1>
                    <p>{data.content}</p>
                </div>
            ))}

            <div className='search-container' style={{ display: show ? 'flex' : 'none' }}>
                <div><input type='search' placeholder='Search here...' /></div>
                <div><button onClick={handleSearchButton}>Search</button></div>
                <div><button onClick={handleCancelButton}>Cancel</button></div>
            </div>
        </div>
    );
}

export default Search;