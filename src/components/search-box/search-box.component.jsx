import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder,changeHandler}) => (
    <input  type="search" 
            className="search"
            placeholder={placeholder}
            onChange={changeHandler} />
)
