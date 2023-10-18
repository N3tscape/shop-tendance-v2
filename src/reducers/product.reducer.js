import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/product.action";

const initialState = [];

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    case GET_PRODUCTS:
      return action.payload;

    case UPDATE_PRODUCT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, ...action.payload };
        } else {
          return product;
        }
      });

    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);

    default:
      return state;
  }
}
