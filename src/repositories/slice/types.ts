import { Repository } from "../types";

export interface RepositoriesState {
  repositories: Repository[];
  repositoriesNameFilter: string;
  languagesUsed: string[];
}
