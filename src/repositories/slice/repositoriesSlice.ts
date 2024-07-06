import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Repository } from "../types";
import { RepositoriesState } from "./types";

const initialState: RepositoriesState = {
  repositories: [],
  languagesUsed: [],
  repositoryNameFilter: "",
  repositoryLanguageFilter: "",
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
          new Set(
            repositories.map((repository) => {
              if (repository.language === null) {
                return "";
              }
              return repository.language;
            }),
          ),
        ),
      };
    },
    loadRepositoryNameFilter: (currentState, action: PayloadAction<string>) => {
      return {
        ...currentState,
        repositoryNameFilter: action.payload,
      };
    },
    loadRepositoryLanguageFilter: (
      currentState,
      action: PayloadAction<string>,
    ) => {
      return {
        ...currentState,
        repositoryLanguageFilter: action.payload,
      };
    },
  },
});

export const {
  loadRepositories: loadRepositoriesActionCreator,
  loadRepositoryNameFilter: loadRepositoryNameFilterActionCreator,
  loadRepositoryLanguageFilter: loadRepositoryLanguageFilterActionCreator,
} = repositoriesSlice.actions;

export const repositoriesReducer = repositoriesSlice.reducer;
