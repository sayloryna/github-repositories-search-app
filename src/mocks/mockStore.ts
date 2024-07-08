import { configureStore, createSlice } from "@reduxjs/toolkit";
import { RepositoriesState } from "../repositories/slice/types";
import {
  testRepository1,
  testRepository2,
  testRepository3,
} from "./mockRepositories";

const initialState: RepositoriesState = {
  repositories: [testRepository1, testRepository2, testRepository3],
  languagesUsed: [
    testRepository1.language,
    testRepository2.language,
    testRepository3.language,
  ],
  repositoryNameFilter: "",
  repositoryLanguageFilter: "",
};

export const MockRepositoriesSlice = createSlice({
  name: "mockrepositories",
  initialState,
  reducers: {},
});

const repositoriesReducer = MockRepositoriesSlice.reducer;

export const mockStore = configureStore({
  reducer: { repositories: repositoriesReducer },
});
