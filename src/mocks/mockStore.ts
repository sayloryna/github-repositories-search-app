import { configureStore, createSlice } from "@reduxjs/toolkit";
import { RepositoriesState } from "../repositories/slice/types";
import {
  testRepository1,
  testRepository2,
  testRepository3,
} from "./mockRepositories";
import { uiReducer } from "../ui/uiSlice/uiSlice";

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

export const mockRepositorySlice = createSlice({
  name: "mockrepositories",
  initialState,
  reducers: {},
});

const repositoriesReducer = mockRepositorySlice.reducer;

export const mockStore = configureStore({
  reducer: { repositories: repositoriesReducer, ui: uiReducer },
});
