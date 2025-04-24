import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fruitList: ['Alma', 'Banan', 'Portağal', 'Armud', 'Ananas'],
  selectedFruits: [],
};

export const fruitSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {
    toggleFruit: (state, action) => {
      const fruit = action.payload;
      if (state.selectedFruits.includes(fruit)) {
        state.selectedFruits = state.selectedFruits.filter(item => item !== fruit);
      } else {
        state.selectedFruits.push(fruit);
      }
    },
    selectAll: (state) => {
      state.selectedFruits = [...state.fruitList];
    },
    deleteAll: (state) => {
      state.selectedFruits = [];
    },
  },
});

export const { toggleFruit, selectAll, deleteAll } = fruitSlice.actions;
export default fruitSlice.reducer;
