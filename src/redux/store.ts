import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//* localstorage add part code

// import { configureStore } from "@reduxjs/toolkit";

// import MenuSliceReducer from "./features/MenuSlice";
// import counterSliceReducer from "./features/counterSlice";

// // Load state from localStorage if available
// const persistedState = localStorage.getItem("reduxState")
//   ? JSON.parse(localStorage.getItem("reduxState") || "{}")
//   : {};

// export const store = configureStore({
//   reducer: {
//     // counter:counterSliceReducer,
//     menuState: MenuSliceReducer,
//   },
//   preloadedState: persistedState,
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {counter: CounterType}
// export type AppDispatch = typeof store.dispatch;

