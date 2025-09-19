import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

// checks if the <Home /> component successfully renders <h2>This is the home page.</h2>
test("Home", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { level: 2, name: "This is the home page." })
  ).toBeDefined();
});
