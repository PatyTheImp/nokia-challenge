import { test, expect } from "@playwright/test";

test("renders list when API succeeds", async ({ page }) => {
  await page.route("http://localhost:3008/api/tasks/", (route) =>
    route.fulfill()
  );

  await page.goto("http://localhost:3000/tasks");

  await expect(page.getByRole("heading", { name: "Tasks:" })).toBeVisible();

  // checks if there's a list item with the exact text "Task"
  await expect(
    page.getByRole("listitem").filter({ hasText: /^Task$/ })
  ).toBeVisible();

  // checks if there's one or more list items that contain the text "Task"
  const items = page
    .getByRole("list")
    .getByRole("listitem")
    .filter({ hasText: "Task" });
  await expect.poll(async () => await items.count()).toBeGreaterThanOrEqual(1);
});
