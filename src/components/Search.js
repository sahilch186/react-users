import React from 'react'

const Search = (props) => {
    return (
        <input type="search" placeholder={props.placeholder} onChange={props.handleChange} />
    )
}

export default Search;
