import puppeteer from 'puppeteer';
const browser = await puppeteer.launch(
  {headless: true}
)
const page = await browser.newPage()
const navigationPromise = page.waitForNavigation()

await page._client.send('Page.setDownloadBehavior', {
  behavior: 'allow',
  downloadPath: "./",
});

await page.goto('https://www.dell.com/support/home/en-uk/drivers/osiso/wt64a',  { waitUntil: 'networkidle2' })

await page.setViewport({ width: 995, height: 1176 })

await page.waitForSelector('#servicetag-input')
await page.click('#servicetag-input')

await page.type('#servicetag-input', '68J27G3')

await page.waitForSelector('#servicetag-submit')
await page.click('#servicetag-submit')
console.log("getting page")

await navigationPromise

await page.waitForSelector('#osisodownload_0P7W2')
await page.click('#osisodownload_0P7W2')
console.log("Clicked")
