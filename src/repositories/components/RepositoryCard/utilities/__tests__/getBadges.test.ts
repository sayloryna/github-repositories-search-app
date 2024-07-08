import { describe, expect, it } from "vitest";
import getBadge from "../getBadge";

describe("Given a getBadge function", () => {
  describe("When it receives 'HTML'", () => {
    it("Should return 'https://img.shields.io/badge/-HTML-white?style=flat-square&logo=HTML5&logoColor=black'", () => {
      const language = "HTML";
      const expectedBadge =
        "https://img.shields.io/badge/-HTML-white?style=flat-square&logo=HTML5&logoColor=black";

      const badge = getBadge(language);

      expect(badge).toBe(expectedBadge);
    });
  });

  describe("When it receives 'CSS'", () => {
    it("Should return 'https://img.shields.io/badge/-CSS-white?style=flat-square&logo=CSS3&logoColor=black'", () => {
      const language = "CSS";
      const expectedBadge =
        "https://img.shields.io/badge/-CSS-white?style=flat-square&logo=CSS3&logoColor=black";

      const badge = getBadge(language);

      expect(badge).toBe(expectedBadge);
    });
  });

  describe("When it receives 'JavaScript'", () => {
    it("Should return 'https://img.shields.io/badge/-JavaScript-white?style=flat-square&logo=JavaScript&logoColor=black'", () => {
      const language = "JavaScript";
      const expectedBadge =
        "https://img.shields.io/badge/-JavaScript-white?style=flat-square&logo=JavaScript&logoColor=black";

      const badge = getBadge(language);

      expect(badge).toBe(expectedBadge);
    });
  });

  describe("When it receives ''", () => {
    it("Should return ''", () => {
      const language = "";
      const expectedBadge = "";

      const badge = getBadge(language);

      expect(badge).toBe(expectedBadge);
    });
  });
});
