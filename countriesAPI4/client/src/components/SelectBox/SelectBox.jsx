import React from 'react';

const SelectBox = ({ continents, selectedContinent, onContinentChange }) => {
  return (
    <select value={selectedContinent} onChange={onContinentChange}>
      <option value="">All Continents</option>
      {continents.map((continent) => (
        <option key={continent} value={continent}>
          {continent}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;