const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: {},
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserpending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.error = "";
    },
    getUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { reducer, actions } = userSlice;

export const { getUserpending, getUserSuccess, getUserFail } = actions;

export default reducer;
