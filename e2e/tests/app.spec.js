const { test, expect } = require('@playwright/test');

test('Home page has correct title and button interaction', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Simple Fullstack App/);
  
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Frontend JS Vanilla');

  const button = page.locator('#fetchBtn');
  await button.click();

  const message = page.locator('#message');
  await expect(message).toHaveText('Hello from Express Backend!');
});
