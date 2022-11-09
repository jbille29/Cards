import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: state => {
            state.cartItems = [];
        },
        removeCartItem: (state, { payload }) => {
            const itemId = payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        addCartItem: ( state, { payload }) => {
            state.cartItems = [
                ...state.cartItems,
                payload
            ]
        },
        addAddressInfo: ( state, { payload }) => {
            // create new cart item 
            const foundItem = state.cartItems.find(({cartId}) => cartId === payload.cartId);
            const newCartItem = {...foundItem, ...payload}
            
            // delete cart item out of cart
            state.cartItems = state.cartItems.filter(({cartId}) => cartId !== payload.cartId);

            // add back to array
            state.cartItems = [
                ...state.cartItems,
                newCartItem
            ]       
        },
        addOne: ( state, { payload }) => {
            for (const obj of state.cartItems) {
                if (obj.cartId === payload) {
                    obj.qty++
                  break;
                }
              }
        },
        subtractOne: ( state, { payload } ) => {
            for (const obj of state.cartItems) {
                if (obj.cartId === payload) {
                    // don't let it subtract past one
                    if(obj.qty > 1) obj.qty--
                  break;
                }
              } 
        }
    }
})

export const { clearCart, removeCartItem, addCartItem, addAddressInfo, addOne, subtractOne } =
    cartSlice.actions;
  
export default cartSlice.reducer;