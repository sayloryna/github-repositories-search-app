import axios from "axios";

import { RepositoriesClientStructure } from "./types";
import { Repository } from "../types";

class RepositoriesClient implements RepositoriesClientStructure {
  async getAllRepos(username: string): Promise<Repository[]> {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
      );

      const repos = response.data as Repository[];

      return repos;
    } catch (error) {
      const errorMessage = (error as Error).message;

      if (errorMessage === "Not found") {
        throw new Error(`Sorry we couldn't find the user:${username} `);
      }
      throw new Error(errorMessage);
    }
  }
}

export default RepositoriesClient;
