import { createSlice } from "@reduxjs/toolkit";

// Reducer
const initialState = {
  dropDownState: false,
};

const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    toggleDropDown: (state) => {
      state.dropDownState = !state.dropDownState;
    },
  },
});

export const { toggleDropDown } = navBarSlice.actions;

export default navBarSlice.reducer;