import { describe, test, expect } from "vitest";
import { testRepository1 } from "../../../mocks/mockRepositories";
import {
  loadRepositoryNameFilterActionCreator,
  repositoriesReducer,
} from "../repositoriesSlice";
import { RepositoriesState } from "../types";

describe("Given a repositoriesSlice", () => {
  describe("When it  receives a current state and a loadRepositoryNameFilter action  with 'testRepository'", () => {
    test("Then it should return a new state with repositoryNameFilter: 'testRepository'", () => {
      const filter = "testRepository";

      const currentState: RepositoriesState = {
        repositories: [testRepository1],
        repositoryNameFilter: "",
        languagesUsed: [testRepository1.language],
      };

      const expectedNewState: RepositoriesState = {
        repositories: [testRepository1],
        repositoryNameFilter: filter,
        languagesUsed: [testRepository1.language],
      };

      const action = loadRepositoryNameFilterActionCreator(filter);

      const newState = repositoriesReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
