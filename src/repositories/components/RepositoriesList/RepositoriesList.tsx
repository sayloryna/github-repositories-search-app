import { Repository } from "../../types";
import RepositoryCard from "../RepositoryCard/RepositoryCard";
import RepositoryLanguageFilterForm from "../RepositoryLanguageFilterForm/RepositoryLanguageFilterForm";
import RepositoryNameFilterForm from "../RepositoryNameFilterForm/RepositoryNameFilterForm";
import "./RepositoriesList.scss";

type RepositoriesListProps = {
  repositories: Repository[];
};

const RepositoriesList = ({
  repositories,
}: RepositoriesListProps): React.ReactElement => {
  return (
    <>
      <div className="repositories__filters">
        <RepositoryNameFilterForm />
        <RepositoryLanguageFilterForm />
      </div>
      <span className="repositories__total">{`Total Results: ${repositories.length}`}</span>
      <ul className="repositories">
        {repositories.map((repository: Repository) => (
          <li key={repository.id}>
            <RepositoryCard repository={repository} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepositoriesList;
