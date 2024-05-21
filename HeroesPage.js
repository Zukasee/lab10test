const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class HeroesPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.attributeDropdown = By.css('div[class="_30qnjy6fkdTLNGj-OhqJZL"]');
        this.strengthAttribute = By.css('div[class="N74aaCii0wv_Ody2YGY_w"]');
        this.axeHeroLink = By.css('a[href="/hero/axe"]');
    }

    async selectStrengthAttribute() {
        const attributeDropdownElement = await this.findElement(this.attributeDropdown, 10000);
        const strengthAttributeElement = await attributeDropdownElement.findElement(this.strengthAttribute);
        await strengthAttributeElement.click();
    }

    async clickAxeHero() {
        const axeHeroLinkElement = await this.findElement(this.axeHeroLink);
        await axeHeroLinkElement.click();
    }
}

module.exports = HeroesPage;
