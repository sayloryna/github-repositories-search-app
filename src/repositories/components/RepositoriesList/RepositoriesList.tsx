import { useAppSelector } from "../../../store/hooks";
import { Repository } from "../../types";
import RepositoryCard from "../RepositoryCard/RepositoryCard";
import RepositoryNameFilterForm from "../RepositoryNameFilterForm/RepositoryNameFilterForm";
import "./RepositoriesList.scss";

const RepositoriesList = (): React.ReactElement => {
  const { repositories, repositoriesNameFilter: repositoriNameFilter } =
    useAppSelector((state) => state.repositoriesReducer);

  const filteredRepositories = repositories.filter((repository: Repository) =>
    repository.name.toLowerCase().includes(repositoriNameFilter.toLowerCase()),
  );

  if (repositories.length === 0) {
    return (
      <img
        className="empty-list-image"
        src="assets/search-holder.webp"
        alt="Github mascot looking through binoculars at the building  in a supernatural landscape"
      />
    );
  }

  return (
    <>
      <RepositoryNameFilterForm />
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
