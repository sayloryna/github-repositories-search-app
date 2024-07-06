import { configureStore, createSlice } from "@reduxjs/toolkit";
import { RepositoriesState } from "../repositories/slice/types";
import {
  testRepository1,
  testRepository2,
  testRepository3,
} from "./mockRepositories";

const initialState: RepositoriesState = {
  repositories: [testRepository1, testRepository2, testRepository3],
  repositoryNameFilter: "",
  languagesUsed: [],
  repositoryLanguageFilter: "",
};

export const MockRepositoriesSlice = createSlice({
  name: "mockrepositories",
  initialState,
  reducers: {},
});

const repositoriesReducer = MockRepositoriesSlice.reducer;

export const mockStore = configureStore({
  reducer: { repositoriesReducer },
});
