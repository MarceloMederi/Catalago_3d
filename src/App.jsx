// src/App.jsx
import { useState } from 'react';
import './App.css';
import { items } from './data/items'; // Importa os itens com as URLs das imagens
import SearchBar from './components/SearchBar'; // Importa o componente de busca

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Função para filtrar itens com base no título ou descrição
  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Itens filtrados:", filteredItems);

  return (
    <div className="App">
      <h1>Catálogo de Peças 3D</h1>
      {/* Usa o componente SearchBar para o campo de busca */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="catalog">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="catalog-item" style={{ marginBottom: "20px" }}>
              <h2>{item.title}</h2>
              <img src={item.imageLink} alt={item.title} style={{ width: "100%", borderRadius: "8px" }} />
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p>Nenhum item encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default App;
