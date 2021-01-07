import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className="search-field">
            <input type="search"
            className="bg-lightest-blue"
            placeholder="search robots"
            onChange={searchChange}
             />
        </div>
    );
}

export default SearchBox;