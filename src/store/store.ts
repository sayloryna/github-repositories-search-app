import { configureStore } from "@reduxjs/toolkit";
import { repositoriesReducer } from "../repositories/slice/repositoriesSlice";

export const store = configureStore({
  reducer: { repositoriesReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
