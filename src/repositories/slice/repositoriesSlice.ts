import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Repository } from "../types";
import { RepositoriesState } from "./types";

const initialState: RepositoriesState = {
  repositories: [],
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
  },
});

export const { loadRepositories: loadRepositoriesActionCreator } =
  RepositoriesSlice.actions;

export const repositoriesReducer = RepositoriesSlice.reducer;
