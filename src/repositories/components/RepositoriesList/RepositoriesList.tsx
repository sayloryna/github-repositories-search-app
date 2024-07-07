import { useAppSelector } from "../../../store/hooks";
import { Repository } from "../../types";
import RepositoryCard from "../RepositoryCard/RepositoryCard";
import RepositoryLanguageFilterForm from "../RepositoryLanguageFilterForm/RepositoryLanguageFilterForm";
import RepositoryNameFilterForm from "../RepositoryNameFilterForm/RepositoryNameFilterForm";
import "./RepositoriesList.scss";

const RepositoriesList = (): React.ReactElement => {
  const { repositories, repositoryNameFilter, repositoryLanguageFilter } =
    useAppSelector((state) => state.repositoriesReducer);

  const filteredRepositories = repositories.filter(
    (repository: Repository) =>
      repository.name
        .toLowerCase()
        .includes(repositoryNameFilter.toLowerCase()) &&
      (repository.language ? repository.language.toLowerCase() : "").includes(
        repositoryLanguageFilter.toLowerCase(),
      ),
  );

  return (
    <>
      <div className="repositories__filters">
        <RepositoryNameFilterForm />
        <RepositoryLanguageFilterForm />
      </div>
      <ul className="repositories">
        {filteredRepositories.map((repository: Repository) => (
          <li key={repository.id}>
            <RepositoryCard repository={repository} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepositoriesList;
