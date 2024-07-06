import { Repository } from "../types";

export interface RepositoriesState {
  repositories: Repository[];
  repositoryNameFilter: string;
  languagesUsed: string[];
}
