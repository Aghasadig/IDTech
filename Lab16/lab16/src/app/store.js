
import { configureStore } from '@reduxjs/toolkit'
import fruitReducer from '../features/fruits/fruitSlice'

export const store = configureStore({
  reducer: {
    fruits: fruitReducer
  }
})

export default store
