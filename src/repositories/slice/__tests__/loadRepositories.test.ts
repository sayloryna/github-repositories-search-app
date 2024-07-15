import { describe, it, expect } from "vitest";
import { RepositoriesState } from "../types";
import { testRepository1 } from "../../../mocks/mockRepositories";
import {
  loadRepositoriesActionCreator,
  repositoriesReducer,
} from "../repositoriesSlice";

describe("Given a repositoriesSlice", () => {
  describe("When it  receives a current state and a loadRepositories action with a list of repositories with testRepository1", () => {
    it("Should return a new state with the list of repositories with testRepository1", () => {
      const newRepositories = [testRepository1];

      const currentState: RepositoriesState = {
        repositories: [],
        repositoryNameFilter: "",
        languagesUsed: [],
        repositoryLanguageFilter: "",
      };

      const expectedNewState: RepositoriesState = {
        repositories: [testRepository1],
        repositoryNameFilter: "",
        languagesUsed: [testRepository1.language],
        repositoryLanguageFilter: "",
      };

      const action = loadRepositoriesActionCreator(newRepositories);

      const newState = repositoriesReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
