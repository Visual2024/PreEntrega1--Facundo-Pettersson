import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={containerStyle}>
      <h2>{greeting}</h2>
      {/* Otro contenido del contenedor */}
    </div>
  );
};


const containerStyle = {
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  margin: '20px',
};

export default ItemListContainer;
