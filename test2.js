const { Builder } = require('selenium-webdriver');
const HomePage = require('./HomePage2');
const HeroesPage = require('./HeroesPage2');

async function runTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        const homePage = new HomePage(driver);
        const heroesPage = new HeroesPage(driver);

        // Открыть главную страницу сайта
        await homePage.open();

        // Переход на страницу героев
        await homePage.clickHeroesLink();

        // Указать имя нужного героя
        const heroName = 'Axe'; // Укажите имя нужного героя
        await heroesPage.searchHero(heroName);

        // Пауза для обновления списка героев
        await driver.sleep(2000);

        // Найти и кликнуть на нужного героя
        await heroesPage.clickHero(heroName);

        // Пауза для просмотра результата
        await driver.sleep(5000);

    } finally {
        await driver.sleep(5000);
        // Закрыть веб-драйвер после выполнения теста
        await driver.quit();
    }
}

runTest();
