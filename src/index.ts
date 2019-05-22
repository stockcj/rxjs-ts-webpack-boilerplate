import * as puppeteer from "puppeteer-extra";

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
import * as StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

// That's it, the rest is puppeteer usage as normal 😊
puppeteer.launch({ headless: false }).then(async (browser: any) => {
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 600 });

  console.log(`Testing the stealth plugin..`);
  await page.goto("https://bot.sannysoft.com");
  await page.waitFor(5000);
  await page.screenshot({ path: "sannysoft.png", fullPage: true });

  await page.goto("https://recaptcha-demo.appspot.com/recaptcha-v3-request-scores.php");
  await page.waitFor(5000);
  await page.screenshot({ path: "recaptcha_test.png", fullPage: true });

  console.log(`All done, check the screenshots. ✨`);
  await browser.close();
});
