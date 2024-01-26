import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  currentUser: any;
  error: any;
}

const initialState: UserState = {
  currentUser: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.currentUser = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
