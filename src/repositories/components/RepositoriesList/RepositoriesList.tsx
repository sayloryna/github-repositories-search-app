import { useAppSelector } from "../../../store/hooks";
import { Repository } from "../../types";
import RepositoryCard from "../RepositoryCard/RepositoryCard";
import "./RepositoriesList.scss";

const RepositoriesList = (): React.ReactElement => {
  const { repositories } = useAppSelector((state) => state.repositoriesReducer);

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
