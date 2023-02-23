const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver');

async function hello_world() {
    let driver = new Builder().forBrowser('chrome').build();

    await driver.get('https://www.google.com');

    await driver.findElement(By.name("q")).sendKeys("Hello World", Key.RETURN);

    driver.quit();
};

hello_world();