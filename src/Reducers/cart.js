const authReducer = (state = { data: null }, actions) => {
  switch (actions.type) {
    case "ADDCART":
      localStorage.setItem("profile", JSON.stringify({ ...actions?.data }));
      return { ...state, data: actions?.data };
    default:
      return state;
  }
};

export default authReducer;
