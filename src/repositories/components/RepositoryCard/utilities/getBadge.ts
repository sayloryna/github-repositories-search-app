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

export default getBadge;
