import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import SearchRepositoriesForm from "./SearchRepositoriesForm";
import { store } from "../../../store/store";
import App from "../../../components/App/App";

describe("Given a SearchRepositoriesForm component", () => {
  describe("When rendered", () => {
    it("Then it should show an 'username' form control ", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
      const expectedText = /username/i;

      const input = screen.getByLabelText(expectedText);

      expect(input).toBeVisible();
    });

    it("Then it should show an 'Search user repositories' button ", () => {
      render(
        <Provider store={store}>
          <SearchRepositoriesForm />
        </Provider>,
      );
      const expectedName = /search user repositories/i;

      const button = screen.getByRole("button", {
        name: expectedName,
      });

      expect(button).toBeVisible();
    });
  });

  describe("And the user submits", () => {
    it("Should call its submit function");
  });
});
