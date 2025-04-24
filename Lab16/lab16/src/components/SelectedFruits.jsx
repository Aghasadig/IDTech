import React from 'react';
import { useSelector } from 'react-redux';

const SelectedFruits = () => {
  const selectedFruits = useSelector(state => state.fruits.selectedFruits);

  return (
    <div>
      <h2>Seçilmiş Meyvələr</h2>
      {selectedFruits.map(fruit => (
        <div
          key={fruit}
          style={{
            padding: '10px',
            margin: '5px',
            border: '1px solid #ccc',
          }}
        >
          {fruit}
        </div>
      ))}
    </div>
  );
};

export default SelectedFruits;
