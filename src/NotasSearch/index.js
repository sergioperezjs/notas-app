import React from 'react';
import { NotasCotext } from '../NotasContext';
import './NotasSearch.css';

function NotasSearch() {
  const {searchValue, setSearchValue} = React.useContext(NotasCotext)

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
     <input 
        className="NotasSearch" 
        placeholder="tareas" 
        value={searchValue}
        onChange={onSearchValueChange}
      />
    );
}

export {NotasSearch};