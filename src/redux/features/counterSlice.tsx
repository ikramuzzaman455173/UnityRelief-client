// import { createSlice } from "@reduxjs/toolkit";
// type counterType = {
//   count: number;
// };
// const initialState: counterType = { count: 0 };
// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.count = state.count + 1;
//     },
//     decrement: (state) => {
//       state.count = state.count - 1;
//     },
//   },
// });

// export const {increment,decrement} = counterSlice.actions;

// export default counterSlice.reducer

//* localstorage add reducer part code

import { createSlice } from "@reduxjs/toolkit";

export type CounterType = {
  count: number;
};

// Load initial state from localStorage if available, otherwise use 0
const initialState: CounterType = {
  count: parseInt(localStorage.getItem("count") || "0", 10),
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
      localStorage.setItem("count", state.count.toString());
    },
    decrement: (state) => {
      state.count = state.count - 1;
      localStorage.setItem("count", state.count.toString());
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
