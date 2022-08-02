import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'CartItems',
  initialState: {
    cartTotalAmount:0,
    cartTotalQuantity:0,
    item: localStorage.getItem("loc")?JSON.parse(localStorage.getItem("loc")):[],

  },
  reducers: {
    addItem(state, action){
       
        const itemIndex = state.item.findIndex((item) => item.id === action.payload.id)

      if (itemIndex >= 0) {
        state.item[itemIndex].quantity += 1

      } else {
        const tempProduct = { ...action.payload, quantity: 1 }
        state.item.push(tempProduct)

      }
        localStorage.setItem("loc",JSON.stringify(state.item));
    },
    deletCartItem(state, action) {
          const nextCart = state.item.filter(
            (item) =>{ return item.id !== action.payload} 
          );
          state.item = nextCart;
          localStorage.setItem("loc", JSON.stringify(state.item));
        return state;
      },
    decreaseCart(state, action) {
      const itemIndex = state.item.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.item[itemIndex].quantity > 1) {
        state.item[itemIndex].quantity -= 1;
        
      } else if (state.item[itemIndex].quantity === 1) {
        const nextCartItems = state.item.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.item = nextCartItems;
      }
      state.cartTotalAmount -= state.item[itemIndex].price;
      

      localStorage.setItem("loc", JSON.stringify(state.item));
    },
    increaseCart(state, action) {
      const itemIndex = state.item.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.item[itemIndex].quantity += 1;
      state.cartTotalAmount += state.item[itemIndex].price;

      localStorage.setItem("loc", JSON.stringify(state.item));
    },
    cartCatculation(state, action) {
      let { total, quantity } = state.item.reduce((cartTotal, item) => {
        const { price, quantity } = item
        const itemTotal = price * quantity;

        cartTotal.total += itemTotal
        cartTotal.quantity += quantity

        return cartTotal
      }, {
        total: 0,
        quantity: 0,
      })

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;

    }}
  
  
})

export const handleAction = counterSlice.actions

export default counterSlice;