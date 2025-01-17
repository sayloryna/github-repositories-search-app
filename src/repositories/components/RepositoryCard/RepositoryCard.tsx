import React from "react";
import { format } from "date-fns";
import { Repository } from "../../types";
import getBadge from "./utilities/getBadge";
import "./RepositoryCard.scss";

type RepositoryProps = {
  repository: Repository;
};

const RepositoryCard = ({
  repository,
}: RepositoryProps): React.ReactElement => {
  const updatedDate = format(new Date(repository.pushed_at), "MMM d");

  const hasNotProgramingLanguage = repository.language === null;

  return (
    <article className="repository">
      <div className="header">
        <a
          className="repository__link"
          href={repository.owner.html_url}
          target="blank"
          title="Visit profile in github"
        >
          <img
            className="repository__owner-avatar"
            src={repository.owner.avatar_url}
            alt="user's avatar"
            height="100"
            width="100"
          />
        </a>
        <a
          className="repository__link"
          href={repository.html_url}
          target="blank"
          title="See on github"
        >
          <h2 className="repository__name">{repository.name}</h2>
        </a>
      </div>
      <p className="repository__description">{repository.description}</p>
      <div className="footer">
        <div className="repository__language" hidden={hasNotProgramingLanguage}>
          <img
            className="repository__language-badge"
            src={getBadge(repository.language)}
            alt={repository.language}
            height="55"
          ></img>
        </div>
        <p className="repository__update">{`Updated on ${updatedDate}`}</p>
      </div>
    </article>
  );
};

export default RepositoryCard;
