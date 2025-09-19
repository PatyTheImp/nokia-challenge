import { test, expect } from "@playwright/test";

test("should navigate to the tasks page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/");
  // Find an element with the text 'Tasks' and click on it
  await page.click("text=Tasks");
  // The new URL should be "/tasks" (baseURL is used there)
  await expect(page).toHaveURL("http://localhost:3000/tasks");
  // The new page should contain an h1 with "About"
  //   await expect(page.locator("h1")).toContainText("About");
  //TODO
});
