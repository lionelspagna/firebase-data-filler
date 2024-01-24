const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set the path to the custom user data directory
const userDataDirectory = './profile';

// Create Chrome options
const chromeOptions = new chrome.Options();
chromeOptions.addArguments(`--user-data-dir=${userDataDirectory}`);

// Set additional Chrome preferences if needed
chromeOptions.addArguments('--start-maximized'); // Example: start Chrome in maximized mode
chromeOptions.addArguments('--disable-blink-features=AutomationControlled');

// Build the WebDriver with Chrome options
const driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

module.exports = { driver };
