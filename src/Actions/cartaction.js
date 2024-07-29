

export const addcart = (cartData) => async (dispatch) => {
  try {
    const { data } = addcart(cartData);
    dispatch({ type: "ADDCART", data });
  } catch (error) {
    console.log(error);
  }
};