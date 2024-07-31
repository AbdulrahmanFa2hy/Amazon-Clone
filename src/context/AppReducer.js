// export const getBasketTotal = (basket) => {
//   return basket.reduce((amount, item) => {
//     return amount + item.price;
//   }, 0);
// };
export const intialState = {
  user: "",
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER":
      return { ...state, user: action.value };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.value] };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((e) => e.id === action.id);
      let newBasket = [...state.basket];
      newBasket.splice(index, 1);
      return { ...state, basket: newBasket };
    case "EMPTY_BASKET":
      return { ...state, basket: [] };
    default:
      return state;
  }
};

export default reducer;
