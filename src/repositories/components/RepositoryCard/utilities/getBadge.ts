const getBadge = (language: string) => {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const backgroundColor = isDarkMode ? "black" : "white";
  const logoColor = isDarkMode ? "white" : "black";

  if (!language) {
    return "";
  }

  if (language === "HTML") {
    return `https://img.shields.io/badge/-HTML-${backgroundColor}?style=flat-square&logo=HTML5&logoColor=${logoColor}`;
  }

  if (language === "CSS") {
    return `https://img.shields.io/badge/-CSS-${backgroundColor}?style=flat-square&logo=CSS3&logoColor=${logoColor}`;
  }

  return `https://img.shields.io/badge/-${language}-${backgroundColor}?style=flat-square&logo=${language}&logoColor=${logoColor}`;
};

export default getBadge;
