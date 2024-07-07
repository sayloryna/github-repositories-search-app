import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../../mocks/mockStore";
import { MemoryRouter } from "react-router-dom";
import RepositoryNameFilterForm from "./RepositoryNameFilterForm";

describe("Given a RepositoryNameFilterForm component", () => {
  describe("When rendered", () => {
    it("Then it should show an 'repository name' form control ", () => {
      const expectedText = /repository name/i;

      render(
        <Provider store={mockStore}>
          <MemoryRouter>
            <RepositoryNameFilterForm />
          </MemoryRouter>
        </Provider>,
      );

      const input = screen.getByLabelText(expectedText);

      expect(input).toBeVisible();
    });

    it("Then it should show an 'Find repository' button ", () => {
      const expectedName = /find repository/i;

      render(
        <Provider store={mockStore}>
          <MemoryRouter>
            <RepositoryNameFilterForm />
          </MemoryRouter>
        </Provider>,
      );

      const button = screen.getByRole("button", {
        name: expectedName,
      });

      expect(button).toBeVisible();
    });
  });
});
