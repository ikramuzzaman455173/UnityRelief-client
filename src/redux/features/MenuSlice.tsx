// import { createSlice } from "@reduxjs/toolkit";

// // Reducer
// const initialState = {
//   dropDownState: false,
// };

// const navBarSlice = createSlice({
//   name: 'menu',
//   initialState,
//   reducers: {
//     toggleDropDown: (state) => {
//       state.dropDownState = !state.dropDownState;
//     }
//   }
// });

// export const { toggleDropDown } = navBarSlice.actions;

// export default navBarSlice.reducer;


// NavBarSlice.ts
import { createSlice } from "@reduxjs/toolkit";

// Define the state interface
export interface NavBarState {
  dropDownState: boolean;
}

// Set the initial state
const initialState: NavBarState = {
  dropDownState: false,
};

// Create the slice
const navBarSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleDropDown: (state) => {
      state.dropDownState = !state.dropDownState;
    },
  },
});

// Export actions and reducer
export const { toggleDropDown } = navBarSlice.actions;
export default navBarSlice.reducer;
