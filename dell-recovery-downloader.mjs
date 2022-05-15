import puppeteer from 'puppeteer';
const browser = await puppeteer.launch(
  {headless: true}
)
const page = await browser.newPage()
await page._client.send('Page.setDownloadBehavior', {
  behavior: 'allow',
  downloadPath: "./",
});

const navigationPromise = page.waitForNavigation()

await page.goto('https://www.dell.com/support/home/en-us/drivers/keyincloud')

await page.setViewport({ width: 1990, height: 1119 })

await page.waitForSelector('#servicetag-input')
await page.click('#servicetag-input')

await page.type('#servicetag-input', '68J27G3')

await page.waitForSelector('#servicetag-submit')
await page.click('#servicetag-submit')

await navigationPromise

await page.waitForSelector('.card > #BrowserDownload > div > #downloadBtn > .btn-download-lg')
await page.click('.card > #BrowserDownload > div > #downloadBtn > .btn-download-lg')

console.log("starting download")

