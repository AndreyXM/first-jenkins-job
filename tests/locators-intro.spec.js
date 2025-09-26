import { test } from "@playwright/test";

test("Google test", async ({ page }) => {
  // navigate to  www.google.com
  await page.goto("https://www.google.com");

  // wait for 5 seconds
  await page.waitForTimeout(3000);

  let searchBox = page.locator("//textarea[@name='q']");

  searchBox.fill("apple");
  await page.waitForTimeout(3000);

  await searchBox.press("Enter");   
  
  await page.waitForTimeout(3000);

});

/*

<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" value="" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwjan-WmiNKPAxX6GVkFHQJLMpMQ39UDCA8" xpath="1" style="" aria-activedescendant=""></textarea>

*/

//textarea[@name="q"]