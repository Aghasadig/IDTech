import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFruit, selectAll, deleteAll } from '../features/fruits/fruitSlice';

const FruitList = () => {
  const { fruitList, selectedFruits } = useSelector(state => state.fruits);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Meyvə Kartları</h2>
      <button onClick={() => dispatch(selectAll())}>Select All</button>
      <button onClick={() => dispatch(deleteAll())}>Delete All</button>
      {fruitList.map(fruit => (
        <div
          key={fruit}
          onClick={() => dispatch(toggleFruit(fruit))}
          style={{
            padding: '10px',
            margin: '5px',
            border: '1px solid blue',
            backgroundColor: selectedFruits.includes(fruit) ? '#a3d3f5' : '#fff',
            cursor: 'pointer',
          }}
        >
          {fruit}
        </div>
      ))}
    </div>
  );
};

export default FruitList;
