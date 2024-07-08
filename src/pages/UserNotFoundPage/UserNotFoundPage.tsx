import React from "react";
import "./UserNotFoundPage.scss";

const UserNotFoundPage = (): React.ReactElement => {
  return (
    <div className="user-not-found">
      <h2 className="user-not-found__message">
        Couldn't find a user with that name
      </h2>
      <img
        loading="lazy"
        className="user-not-found__image"
        src="../assets/no-results.webp"
        alt="github mascot looking through a globe hologram with a magnifying glass"
        width={500}
        height={310}
      />
    </div>
  );
};

export default UserNotFoundPage;
