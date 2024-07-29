

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = signup(authData);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = login(authData);
    dispatch({ type: "AUTH", data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
