import { test } from "@playwright/test";

test.describe("Practice.cydeo", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://practice.cydeo.com/");
    await page.waitForTimeout(2000);
    
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.close();
  });



  test("Title of page", async ({ page }) => {
    console.log(await page.title());
  });
  
  test("URL of page", async ({ page }) => {
    console.log(page.url());
  });

});      