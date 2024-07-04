import React from "react";
import { Repository } from "../../types";
import "./RepositoryCard.scss";
import { format } from "date-fns";

type RepositoryProps = {
  repository: Repository;
};

const RepositoryCard = ({
  repository,
}: RepositoryProps): React.ReactElement => {
  const updatedDate = format(repository.pushed_at, "MMM d");

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
      <p className="repository__description">{repository.description}</p>
      <div className="footer">
        <div className="repository__language">
          <img
            className="repository__language-badge"
            src={
              repository.language === "HTML"
                ? `https://img.shields.io/badge/-HTML-ffffff?style=flat-square&logo=HTML5&logoColor=black`
                : `https://img.shields.io/badge/-${repository.language}-ffffff?style=flat-square&logo=${repository.language}&logoColor=black`
            }
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
