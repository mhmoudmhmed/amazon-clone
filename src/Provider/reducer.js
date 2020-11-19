export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) => basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case 'REMOVE_FROM_BASKET':
      // cloned the basket
      let newBasket = [...state.basket];
      // compared basket.id to the choosen product to remove
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      if(index >= 0 ) {
        // item exist and remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }
      return {
        ...state,
        basket: newBasket
      }
    default :
      return state;
  };
};

export default reducer;