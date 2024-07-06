import { Repository } from "../types";

export interface RepositoriesState {
  repositories: Repository[];
  languagesUsed: string[];
  repositoryNameFilter: string;
  repositoryLanguageFilter: string;
}
