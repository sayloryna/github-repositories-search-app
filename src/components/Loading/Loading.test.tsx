import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  it("Should show a spinner with the label 'Loading'", () => {
    render(<Loading />);

    const loading = screen.getByLabelText("Loading");

    expect(loading).toBeVisible();
  });
});
