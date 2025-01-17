import React from "react";
import "./HomePage.scss";

const HomePage = (): React.ReactElement => {
  return (
    <img
      className="home-image"
      src="assets/search-holder.webp"
      alt="Github mascot looking through binoculars at the building in a supernatural landscape"
      width={770}
      height={367}
    />
  );
};

export default HomePage;
