import React from 'react';

import './SearchBox.css'

const SearchBox = ({placeholder, handlachange}) => {
    return ( 
        <div>
            <input type="search" className='search' placeholder={placeholder} onChange={handlachange}/>
        </div>
     );
}
 
export default SearchBox;