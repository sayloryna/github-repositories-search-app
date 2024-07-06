import { describe, test, expect } from "vitest";
import { testRepository1 } from "../../../mocks/mockRepositories";
import {
  loadRepositoryLanguageFilterActionCreator,
  repositoriesReducer,
} from "../repositoriesSlice";
import { RepositoriesState } from "../types";

describe("Given a repositoriesSlice", () => {
  describe("When it  receives a current state and a loadRepositoryLanguageFilter action  with 'JavasScript'", () => {
    test("Then it should return a new state with repositoryLanguageFilter: 'JavasScript'", () => {
      const filter = "JavaScript";

      const currentState: RepositoriesState = {
        repositories: [testRepository1],
        languagesUsed: [testRepository1.language],
        repositoryNameFilter: "",
        repositoryLanguageFilter: "",
      };

      const expectedNewState: RepositoriesState = {
        repositories: [testRepository1],
        languagesUsed: [testRepository1.language],
        repositoryNameFilter: "",
        repositoryLanguageFilter: filter,
      };

      const action = loadRepositoryLanguageFilterActionCreator(filter);

      const newState = repositoriesReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
