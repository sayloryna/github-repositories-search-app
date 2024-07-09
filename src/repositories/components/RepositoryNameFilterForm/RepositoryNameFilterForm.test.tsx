import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { mockStore } from "../../../mocks/mockStore";
import RepositoryNameFilterForm from "./RepositoryNameFilterForm";

describe("Given a RepositoryNameFilterForm component", () => {
  describe("When rendered", () => {
    it("Should show an 'Find Repository..' form control ", () => {
      const expectedText = /find Repository../i;

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

    it("Should show an 'Find repository' button ", () => {
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
