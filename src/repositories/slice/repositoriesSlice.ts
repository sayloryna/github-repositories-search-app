import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Repository } from "../types";
import { RepositoriesState } from "./types";

const initialState: RepositoriesState = {
  repositories: [],
  repositoriNameFilter: "",
};

export const RepositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    loadRepositories: (currentState, action: PayloadAction<Repository[]>) => {
      return {
        ...currentState,
        repositories: action.payload,
      };
    },

    loadRepositoryNameFilter: (currentState, action: PayloadAction<string>) => {
      return {
        ...currentState,
        repositoriNameFilter: action.payload,
      };
    },
  },
});

export const {
  loadRepositories: loadRepositoriesActionCreator,
  loadRepositoryNameFilter: loadRepositoryNameFilterActionCreator,
} = RepositoriesSlice.actions;

export const repositoriesReducer = RepositoriesSlice.reducer;
