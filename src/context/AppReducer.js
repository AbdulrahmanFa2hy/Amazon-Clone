export const intialState = {
  user: "",
  basket: [],
  // loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER":
      return { ...state, user: action.value };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.value] };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((e) => e.id === action.id);
      console.log(index);
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
