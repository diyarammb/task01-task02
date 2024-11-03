const express = require("express");
const puppeteer = require("puppeteer");

const app = express();
const port = process.env.PORT || 3000;

async function searchGoogle(query) {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  try {
    await page.goto("https://www.google.com/");

    await page.waitForSelector('input[name="q"]');

    await page.type('input[name="q"]', query);
    await page.keyboard.press("Enter");

    await page.waitForTimeout(3000);

    const titles = await page.evaluate(() =>
      Array.from(document.querySelectorAll("h3.LC20wb span")).map((el) =>
        el.textContent.trim()
      )
    );

    return titles.slice(0, 10);
  } catch (error) {
    console.error("Error during search:", error);
    return [];
  } finally {
    await browser.close();
  }
}

app.get("/search", async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).send("Missing search query parameter (q)");
  }

  try {
    const titles = await searchGoogle(query);
    res.json(titles);
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Server   
 listening on port ${port}`);
});
