const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage2');

class HeroesPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.searchInput = By.css('div._2paN1PFQTqGDNSagtldD_J input[type="text"]');
    }

    async searchHero(heroName) {
        const searchInputElement = await this.findElement(this.searchInput);
        await searchInputElement.sendKeys(heroName);
    }

    async clickHero(heroName) {
        const heroLink = By.css(`a[href="/hero/${heroName.toLowerCase()}"]`);
        const heroElement = await this.findElement(heroLink);
        await heroElement.click();
    }
}

module.exports = HeroesPage;
