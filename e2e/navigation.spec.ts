import { test, expect } from "@playwright/test";

test("should navigate to the tasks page", async ({ page }) => {
  // Start from the index page
  await page.goto("http://localhost:3000/");
  // Find a link element with the text 'Tasks' and click on it
  await page.getByRole("link", { name: "Tasks" }).click();
  // The new URL should be "/tasks" (baseURL is used there)
  await expect(page).toHaveURL("http://localhost:3000/tasks");
});

test("should navigate to the home page", async ({ page }) => {
  await page.goto("http://localhost:3000/tasks");
  await page.getByRole("link", { name: "Home" }).click();
  await expect(page).toHaveURL("http://localhost:3000/");
  // The new page should contain an h2 with "This is the home page."
  await expect(page.locator("h2")).toContainText("This is the home page.");
});
