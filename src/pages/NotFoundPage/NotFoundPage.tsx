import React from "react";
import "./NotFoundPage.scss";

const NotFoundPage = (): React.ReactElement => {
  return (
    <div className="not-found">
      <h2 className="not-found__message">Oops! The page doesn't exist</h2>
      <img
        src="assets/404-error.webp"
        alt="404 space styled"
        width={800}
        height={600}
      />
    </div>
  );
};

export default NotFoundPage;
