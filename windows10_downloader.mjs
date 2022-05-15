import puppeteer from 'puppeteer';
const browser = await puppeteer.launch(
  {headless: true}
)
const page = await browser.newPage()
await page.goto('https://www.microsoft.com/en-us/software-download/windows10ISO', {timeout: 0})

await page._client.send('Page.setDownloadBehavior', {
  behavior: 'allow',
  downloadPath: "./",
});

console.log("page loaded")
await page.waitForSelector('#product-edition')
await page.click('#product-edition')

console.log("selected edition")
await page.select('#product-edition', '2084')

await page.waitForSelector('#submit-product-edition')
await page.click('#submit-product-edition')

await page.waitForSelector('#product-languages')
await page.click('#product-languages')

await page.select('#product-languages', '{"id":"13378","language":"English"}')

await page.waitForSelector('#submit-sku')
await page.click('#submit-sku')

await page.waitForSelector('#card-info-content > .span > .row-fluid:nth-child(2) > .span > .button')
await page.click('#card-info-content > .span > .row-fluid:nth-child(2) > .span > .button')
console.log("downloading")
