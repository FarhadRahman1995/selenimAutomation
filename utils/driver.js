const { Builder } = require('selenium-webdriver');

let driver;

async function setupDriver() {
  driver = await new Builder().forBrowser('chrome').build();
}

async function quitDriver() {
  await driver.quit();
}

module.exports = {
  setupDriver,
  quitDriver,
  driver,
};
