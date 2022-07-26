import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../redux/counterSlice'

 const store = configureStore({
  reducer: {
    cart : counterSlice.reducer,
  }
})
 
export default store;