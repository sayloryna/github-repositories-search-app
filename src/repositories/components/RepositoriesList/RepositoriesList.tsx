import { useAppSelector } from "../../../store/hooks";
import { Repository } from "../../types";
import RepositoryCard from "../RepositoryCard/RepositoryCard";
import "./RepositoriesList.scss";

const RepositoriesList = (): React.ReactElement => {
  const { repositories } = useAppSelector((state) => state.repositoriesReducer);

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
    <ul className="repositories">
      {repositories.map((repository: Repository) => (
        <li key={repository.id}>
          <RepositoryCard repository={repository} />
        </li>
      ))}
    </ul>
  );
};

export default RepositoriesList;
