import React from "react";
import { format } from "date-fns";
import { Repository } from "../../types";
import "./RepositoryCard.scss";

type RepositoryProps = {
  repository: Repository;
};

const RepositoryCard = ({
  repository,
}: RepositoryProps): React.ReactElement => {
  const updatedDate = format(repository.pushed_at, "MMM d");

  const hasNotProgramingLanguage = repository.language === null;
  const getBadge = (language: string) => {
    if (!language) {
      return "";
    }

    if (language === "HTML") {
      return "https://img.shields.io/badge/-HTML-ffffff?style=flat-square&logo=HTML5&logoColor=black";
    }

    if (language === "CSS") {
      return "https://img.shields.io/badge/-CSS-ffffff?style=flat-square&logo=CSS3&logoColor=black";
    }
    return `https://img.shields.io/badge/-${language}-ffffff?style=flat-square&logo=${language}&logoColor=black`;
  };

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
