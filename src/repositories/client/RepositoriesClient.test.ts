import { describe, expect, it } from "vitest";
import RepositoriesClient from "./RepositoriesClient";
import { testRepository1 } from "../../mocks/mockRepositories";
import { Repository } from "../types";

describe("Given a repositoriesClient", () => {
  describe("When its getAllRepos method is called with 'mockUsername'", () => {
    it("Should return a list of repositories including testRepository1", async () => {
      const username = "mockUsername";
      const expectedRepositories: Repository[] = [testRepository1];

      const client = new RepositoriesClient();

      const repositories = await client.getAllRepos(username);

      expect(repositories).toEqual(
        expect.arrayContaining(expectedRepositories),
      );
    });
  });
});
