const { By, until } = require('selenium-webdriver');

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async open(url) {
        await this.driver.get(url);
    }

    async findElement(locator, timeout = 5000) {
        await this.driver.wait(until.elementLocated(locator), timeout);
        return await this.driver.findElement(locator);
    }
}

module.exports = BasePage;
