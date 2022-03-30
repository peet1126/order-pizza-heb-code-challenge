import { createSlice } from "@reduxjs/toolkit";

// Redux state is used to store the users access token and login errors
const initialState = {
  token: null,
  error: null,
};

export const name = "user";

const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload.access_token;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    logOut(state) {
      state.token = null;
    },
  },
});

// fetches the auth access token and dispatches the token or login errors
export const getAccessTokenAsync = (userInfo) => (dispatch) => {
  fetch("https://order-pizza-api.herokuapp.com/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo.payload),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.msg) {
        dispatch(setError(data.msg));
      } else {
        dispatch(setToken(data));
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const { setToken, setError, logOut } = userSlice.actions;

export default userSlice.reducer;
