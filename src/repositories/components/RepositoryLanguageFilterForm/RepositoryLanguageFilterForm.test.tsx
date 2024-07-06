import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import RepositoryLanguageFilterForm from "./RepositoryLanguageFilterForm";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach } from "vitest";
import { mockStore } from "../../../mocks/mockStore";

const user = userEvent.setup();
beforeEach(() => {
  render(
    <Provider store={mockStore}>
      <RepositoryLanguageFilterForm />
    </Provider>,
  );
});
describe("Given a RepositoryLanguageFilterForm component", () => {
  describe("When rendered", () => {
    it("Should show the input control Select a Language to filter", () => {
      const expectedName = "Select a Language to filter";

      const input = screen.getByLabelText(expectedName);

      expect(input).toBeVisible();
    });

    it("updates the selected language and dispatches an action when changed", async () => {
      const language = "JavaScript";

      const select = screen.getByRole("combobox");

      await user.selectOptions(select, language);

      expect(select).toHaveValue(language);
    });
  });
});
