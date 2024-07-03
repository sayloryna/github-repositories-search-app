import React from "react";
import { Repository } from "../../types";
import "./RepositoryCard.scss";

type RepositoryProps = {
  repository: Repository;
};

const RepositoryCard = ({
  repository,
}: RepositoryProps): React.ReactElement => {
  return (
    <article className="repository">
      <div className="header">
        <img
          className="repository__owner-avatar"
          src={repository.owner.avatar_url}
          alt="user's avatar"
          height="100"
          width="100"
        />
        <a href={repository.html_url}>
          <h2 className="repository__name">{repository.name}</h2>
        </a>
      </div>
      <span className="repository__language">{repository.laguage}</span>
    </article>
  );
};

export default RepositoryCard;
