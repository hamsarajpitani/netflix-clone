import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state,action) =>{
      state.user = action.payload;
    },
    logout : (state) =>{
      state.user = null;
    }
  }
});

//* dispatched login and logout to global

export const { login , logout} = userSlice.actions;

//* exported for me to  access it


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
