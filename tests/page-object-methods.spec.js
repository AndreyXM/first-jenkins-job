import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  // Navigate to the https://practice.cydeo.com/
  await page.goto("https://practice.cydeo.com/");
  // Wait for 2 seconds to ensure the page fully loads before checking the title
  await page.waitForTimeout(2000);

  let actualTitle = await page.title();

  console.log(actualTitle);
});

test("Getting the current url of the page", async ({ page }) => {
  // Navigate to the https://practice.cydeo.com/
  await page.goto("https://practice.cydeo.com/");
  // Wait for 2 seconds to ensure the page fully loads before checking the 
    await page.waitForTimeout(2000);

  let actualURL = page.url();

  console.log(actualURL);

});

test("Set the windows size", async ({ page }) => {
  // Navigate to the https://practice.cydeo.com/
  await page.goto("https://practice.cydeo.com/");
  // Wait for 2 seconds to ensure the page fully loads before checking the
  await page.waitForTimeout(2000);

 page.setViewportSize({ width: 1400, height: 800 });
    await page.waitForTimeout(2000);

});

