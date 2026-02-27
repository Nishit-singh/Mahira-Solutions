const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
  const page = await browser.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.toString());
  });

  await page.goto('http://localhost:3001/printing', { waitUntil: 'networkidle0' });
  console.log('Page loaded');

  // Find a product card with 'engraved-pencils' or click a product link
  await page.evaluate(() => {
    // Find h3 that has text 'Engraved Pencils'
    const h3s = Array.from(document.querySelectorAll('h3'));
    const h3 = h3s.find(el => el.textContent.includes('Engraved Pencils'));
    if (h3) {
      h3.parentElement.parentElement.parentElement.click();
    }
  });

  await new Promise(r => setTimeout(r, 2000));

  await browser.close();
  console.log('Test completed');
})();
