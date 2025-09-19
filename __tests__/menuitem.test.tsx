import { render, screen } from "@testing-library/react";
import React from "react";
import { vi, describe, test, expect } from "vitest";

// Mock next/navigation BEFORE importing the component
vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

import { usePathname } from "next/navigation";
import type { Mock } from "vitest";
import MenuItem from "../app/components/MenuItem";

describe("MenuItem", () => {
  // resets all Vitest mocks/spies so each test starts clean
  beforeEach(() => vi.resetAllMocks());

  test("renders bold text (not a link) when the item is active", () => {
    (usePathname as unknown as Mock).mockReturnValue("/tasks");

    render(
      <ul>
        <MenuItem text="Tasks" href="/tasks" />
      </ul>
    );

    expect(screen.getByText("Tasks").tagName).toBe("P");
    expect(
      screen.queryByRole("link", { name: "Tasks" })
    ).not.toBeInTheDocument();
  });

  test("renders a link when the item is inactive", () => {
    (usePathname as unknown as Mock).mockReturnValue("/");

    render(
      <ul>
        <MenuItem text="Tasks" href="/tasks" />
      </ul>
    );

    const link = screen.getByRole("link", { name: "Tasks" });
    expect(link).toHaveAttribute("href", "/tasks");
  });

  test("supports extra className on the li", () => {
    (usePathname as unknown as Mock).mockReturnValue("/nowhere");

    const { container } = render(
      <ul>
        <MenuItem className="extra" text="Home" href="/" />
      </ul>
    );

    const li = container.querySelector("li");
    expect(li).toHaveClass("extra");
  });
});
