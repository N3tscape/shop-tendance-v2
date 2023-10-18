import axios from "axios";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addProduct = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/products", data);

      dispatch({
        type: ADD_PRODUCT,
        payload: response.data,
      });

      return response.data;
    } catch (error) {
      throw new Error("Failed to add product.");
    }
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(
        "Une erreur s'est produite lors de la récupération des données.",
        error
      );
    }
  };
};

export const updateProduct = (data) => {
  return async (dispatch) => {
    return await axios
      .put(`http://localhost:5000/products/${data.id}`, data)
      .then((response) => {
        dispatch({
          type: UPDATA_PRODUCT,
          payload: response.data,
        });
      });
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    return await axios
      .delete(`http://localhost:5000/products/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: id,
        });
      });
  };
};
