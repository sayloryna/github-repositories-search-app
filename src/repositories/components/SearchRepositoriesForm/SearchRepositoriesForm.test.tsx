import { http, HttpResponse } from "msw";
import { MemoryRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { ToastContainer } from "react-toastify";
import SearchRepositoriesForm from "./SearchRepositoriesForm";
import { mockStore } from "../../../mocks/mockStore";
import { store } from "../../../store/store";
import { server } from "../../../mocks/node";
import mainRouter from "../../../Router/mainRouter";
import { Repository } from "../../types";

const user = userEvent.setup();

const typeAndSubmit = async (text: string): Promise<void> => {
  const expectedButtonName = /search user repositories/i;
  const submitButton = screen.getByRole("button", {
    name: expectedButtonName,
  });
  const expectedText = /username/i;

  const input = screen.getByLabelText(expectedText);
  await user.type(input, text);

  await user.click(submitButton);
};

describe("Given a SearchRepositoriesForm component", () => {
  describe("When rendered", () => {
    it("Then it should show an 'username' form control ", () => {
      const expectedText = /username/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <SearchRepositoriesForm />
          </MemoryRouter>
        </Provider>,
      );

      const input = screen.getByLabelText(expectedText);

      expect(input).toBeVisible();
    });

    it("Then it should show an 'Search user repositories' button ", () => {
      const expectedName = /search user repositories/i;

      render(
        <Provider store={store}>
          <MemoryRouter>
            <SearchRepositoriesForm />
          </MemoryRouter>
        </Provider>,
      );

      const button = screen.getByRole("button", {
        name: expectedName,
      });

      expect(button).toBeVisible();
    });
  });

  describe("And the user submits with 'mockUsername' ", () => {
    it("it should show the text 'Unable to get repositories from user: '", async () => {
      const expectedText =
        /unable to get repositories from user: mockusername/i;

      server.use(
        http.get("https://api.github.com/users/mockUsername/repos", () => {
          return HttpResponse.json<Repository[]>([], { status: 404 });
        }),
      );

      render(
        <Provider store={store}>
          <MemoryRouter>
            <SearchRepositoriesForm />
            <ToastContainer />
          </MemoryRouter>
        </Provider>,
      );

      await typeAndSubmit("mockUsername");

      const text = await screen.findByText(expectedText);

      expect(text).toBeVisible();
    });
  });

  describe("And the user submits with 'mockUsername' but the fetch fails", () => {
    it("it should show a heading with 'testRepository1'", async () => {
      const expectedText = /testrepository1/i;

      render(
        <Provider store={mockStore}>
          <RouterProvider router={mainRouter} />
        </Provider>,
      );

      await typeAndSubmit("mockUsername");

      const heading = await screen.findByRole("heading", {
        name: expectedText,
      });

      expect(heading).toBeVisible();
    });
  });
});
