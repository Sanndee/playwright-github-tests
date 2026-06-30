import { test, expect } from "@playwright/test";
import { Loginpage } from "../Playwright_Practice_typescript_own/pages/Loginpage";

test("developing the login page with github 3", async ({ page }) => {
  const loginPageObj = new Loginpage(page);

  await loginPageObj.openApplication();
  await loginPageObj.login();

  await expect(page).toHaveURL(/inventory.html/);
});