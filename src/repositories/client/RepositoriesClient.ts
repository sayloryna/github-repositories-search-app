import axios from "axios";
import { RepositoriesClientStructure } from "./types";
import { Repository, RepositoryDto } from "../types";
import convertRepositoryDTOtoRepository from "../DTO/convertRepositoryDTOtoRepository";

class RepositoriesClient implements RepositoriesClientStructure {
  async getAllRepos(username: string): Promise<Repository[]> {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
      );

      const reposDto = response.data as RepositoryDto[];
      const repos = reposDto.map((repo: RepositoryDto): Repository => {
        return convertRepositoryDTOtoRepository(repo);
      });

      return repos;
    } catch {
      throw new Error(`Couldn't find repos for user: ${username}`);
    }
  }
}

export default RepositoriesClient;
