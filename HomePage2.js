const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage2');

class HomePage extends BasePage {
    constructor(driver) {
        super(driver);
        this.heroesLink = By.css('a[href="/heroes"]');
    }

    async open() {
        await super.open('https://www.dota2.com/');
    }

    async clickHeroesLink() {
        const heroesLinkElement = await this.findElement(this.heroesLink);
        await heroesLinkElement.click();
    }
}

module.exports = HomePage;
