import { Repository, RepositoryDto } from "../types";

const convertRepositoryDTOtoRepository = (
  repositoryDTO: RepositoryDto,
): Repository => {
  return { ...repositoryDTO, pushed_at: new Date(repositoryDTO.pushed_at) };
};

export default convertRepositoryDTOtoRepository;
