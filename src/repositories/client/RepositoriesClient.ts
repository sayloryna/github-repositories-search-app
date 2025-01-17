import axios from "axios";
import { RepositoriesClientStructure } from "./types";
import { Repository } from "../types";

export class RepositoriesClient implements RepositoriesClientStructure {
  async getAllRepos(username: string): Promise<Repository[]> {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
      );

      const repos = response.data as Repository[];

      return repos;
    } catch {
      throw new Error(`Couldn't find repos for user: ${username}`);
    }
  }
}

export const client = new RepositoriesClient();
