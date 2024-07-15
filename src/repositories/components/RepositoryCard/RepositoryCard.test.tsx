import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import RepositoryCard from "./RepositoryCard";
import { testRepository1 } from "../../../mocks/mockRepositories";

describe("Given a RepositoryCard component", () => {
  describe("When it receives the testRepository1 and rendered", () => {
    beforeEach(() => {
      render(<RepositoryCard repository={testRepository1} />);
    });

    it("Should show a heading with 'testRepository1'", () => {
      const expectedHeading = /testrepository1/i;

      const heading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeVisible();
    });

    it("Should show an image with the alternative text 'user's avatar'", () => {
      const expectedAltText = /user's avatar/i;

      const alternativeText = screen.getByAltText(expectedAltText);

      expect(alternativeText).toBeVisible();
    });

    it("Should show the description 'A test repository for my project'", () => {
      const expectedText = /a test repository for my project/i;

      const description = screen.getByText(expectedText);

      expect(description).toBeVisible();
    });

    it("Should show an image with the alternative text 'JavaScript'", () => {
      const expectedAltText = /javascript/i;

      const alternativeText = screen.getByAltText(expectedAltText);

      expect(alternativeText).toBeVisible();
    });

    it("Should show the text 'Updated on Jan 13'", () => {
      const expectedText = /updated on Jan 13/i;

      const text = screen.getByText(expectedText);

      expect(text).toBeVisible();
    });
  });
});
