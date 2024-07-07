import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loading from "./Loading";

describe("given a Loading component", () => {
  it("should show a spinner ith the label 'Loading'", () => {
    render(<Loading />);

    const loading = screen.getByLabelText("Loading");

    expect(loading).toBeVisible();
  });
});
