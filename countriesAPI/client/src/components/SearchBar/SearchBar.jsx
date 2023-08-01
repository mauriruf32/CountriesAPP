import React, { useState } from 'react';

const SearchBar = ({ countries, onSearch }) => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setName(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search countries..."
        value={name}
        onChange={handleInputChange}
      />
              <button
        onClick={() => {
          onSearch(name);
        }}
          >Buscar</button>
    </div>
  );
};

export default SearchBar;