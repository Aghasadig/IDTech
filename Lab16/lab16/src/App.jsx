import React from 'react';
import FruitList from './components/FruitList';
import SelectedFruits from './components/SelectedFruits';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Meyvə Seçmə Tətbiqi</h1>
      <div className="lists-container">
        <FruitList />
        <SelectedFruits />
      </div>
    </div>
  );
}

export default App;
