import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";
import { describe, it, expect } from "vitest";

describe("Given the NotFoundPage component", () => {
  describe("When rendered", () => {
    it("Then it should show a heading with 'Oops! The page doesn't exist'", () => {
      const expectedTitle = /oops! the page doesn't exist/i;

      render(<NotFoundPage />);

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeVisible();
    });

    it("Then it should show an image with the alternative text '404 space styled'", () => {
      const expectedText = /404 space styled/i;

      render(<NotFoundPage />);

      const image = screen.getByAltText(expectedText);

      expect(image).toBeVisible();
    });
  });
});
