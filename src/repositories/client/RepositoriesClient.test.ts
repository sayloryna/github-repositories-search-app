import { describe, expect, it } from "vitest";
import RepositoriesClient from "./RepositoriesClient";
import { testRepository1 } from "../../mocks/mockRepositories";
import { Repository } from "../types";
import { server } from "../../mocks/node";
import { http, HttpResponse } from "msw";

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

  describe("When its getAllRepos method is called with an username that does not exist for example: errorUsername", () => {
    it("Should throw an error: 'Couldn't find repos for user: errorUsername'", () => {
      server.use(
        http.get("https://api.github.com/users/errorUsername/repos", () => {
          return HttpResponse.json(null, { status: 404 });
        }),
      );

      const username = "errorUsername";
      const expectedErrorMessage = `Couldn't find repos for user: ${username}`;
      const expectedError = new Error(expectedErrorMessage);

      const client = new RepositoriesClient();

      expect(async () => {
        await client.getAllRepos(username);
      }).rejects.toThrowError(expectedError);
    });
  });
});
