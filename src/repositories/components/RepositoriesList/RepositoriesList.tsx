import { Repository } from "../../types";
import RepositoryCard from "../RepositoryCard/RepositoryCard";

interface RepositoriesListProps {
  repositories: Repository[];
}

const RepositoriesList = ({
  repositories,
}: RepositoriesListProps): React.ReactElement => {
  return (
    <ul className="repositories">
      {repositories.map((repository) => (
        <li key={repository.id}>
          <RepositoryCard repository={repository} />
        </li>
      ))}
    </ul>
  );
};

export default RepositoriesList;
