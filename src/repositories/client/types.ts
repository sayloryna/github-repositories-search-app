import { Repository } from "../types";

export type RepositoriesClientStructure = {
  getAllRepos: (username: string) => Promise<Repository[]>;
};
