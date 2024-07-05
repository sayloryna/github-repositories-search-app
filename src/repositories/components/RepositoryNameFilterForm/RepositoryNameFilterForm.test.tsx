import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../../../mocks/mockStore";
import RepositoryNameFilterForm from "./RepositoryNameFilterForm";
import App from "../../../components/App/App";

describe("Given a SearchRepositoriesForm component", () => {
  describe("When rendered", () => {
    it("Then it should show an 'repository name' form control ", () => {
      render(
        <Provider store={mockStore}>
          <App />
        </Provider>,
      );
      const expectedText = /repository name/i;

      const input = screen.getByLabelText(expectedText);

      expect(input).toBeVisible();
    });

    it("Then it should show an 'Find repository' button ", () => {
      render(
        <Provider store={mockStore}>
          <RepositoryNameFilterForm />
        </Provider>,
      );
      const expectedName = /find repository/i;

      const button = screen.getByRole("button", {
        name: expectedName,
      });

      expect(button).toBeVisible();
    });
  });
});
