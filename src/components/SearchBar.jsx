// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Filtrar por título ou descrição..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
    className="search-input" // Adiciona uma classe para facilitar a estilização
  />
);

export default SearchBar;
