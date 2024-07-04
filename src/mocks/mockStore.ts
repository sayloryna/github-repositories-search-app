import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RepositoriesState } from "../repositories/slice/types";
import { Repository } from "../repositories/types";
import {
  testRepository1,
  testRepository2,
  testRepository3,
} from "./mockRepositories";

const initialState: RepositoriesState = {
  repositories: [testRepository1, testRepository2, testRepository3],
};

export const MockRepositoriesSlice = createSlice({
  name: "mockrepositories",
  initialState,
  reducers: {
    loadRepositories: (currentState, action: PayloadAction<Repository[]>) => {
      return {
        ...currentState,
        repositories: action.payload,
      };
    },
  },
});

const repositoriesReducer = MockRepositoriesSlice.reducer;

export const mockStore = configureStore({
  reducer: { repositoriesReducer },
});
