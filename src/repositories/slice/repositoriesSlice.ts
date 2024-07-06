import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Repository } from "../types";
import { RepositoriesState } from "./types";

const initialState: RepositoriesState = {
  repositories: [],
  repositoriesNameFilter: "",
  languagesUsed: [],
};

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    loadRepositories: (currentState, action: PayloadAction<Repository[]>) => {
      const repositories = action.payload;
      return {
        ...currentState,
        repositories,
        languagesUsed: Array.from(
          new Set(repositories.map((repository) => repository.language)),
        ),
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
} = repositoriesSlice.actions;

export const repositoriesReducer = repositoriesSlice.reducer;
