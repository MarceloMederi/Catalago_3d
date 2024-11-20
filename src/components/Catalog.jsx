// src/components/Catalog.jsx
import React, { useState } from 'react';
import { items } from '../data/items'; // Certifique-se de que a importação está correta
import Carousel from './Carousel'; // Ajuste o caminho conforme necessário

const Catalog = () => {
  const [search, setSearch] = useState('');

  // Filtra os itens com base no título ou nas palavras-chave
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.keywords.some(keyword => keyword.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por descrição ou palavra-chave..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
      />
      <Carousel items={filteredItems} />
    </div>
  );
};

export default Catalog;
