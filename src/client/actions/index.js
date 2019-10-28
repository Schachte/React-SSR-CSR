// The type dispatches an action with a payload to the correct reducer,
// then the reducer will reduce the state of the redux store based on the reducer
// that was combined via the CombineReducers call.
export const FETCH_USERS = "fetch_users";
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("https://react-ssr-api.herokuapp.com/users");
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const FETCH_CURRENT_USER = "fetch_current_user";
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};
