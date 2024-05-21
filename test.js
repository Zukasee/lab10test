const { Builder } = require('selenium-webdriver');
const HomePage = require('./HomePage');
const HeroesPage = require('./HeroesPage');

async function runTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        const homePage = new HomePage(driver);
        const heroesPage = new HeroesPage(driver);

        // Открыть главную страницу сайта
        await homePage.open();

        // Переход на страницу героев
        await homePage.clickHeroesLink();

        // Выбор атрибута Strength
        await heroesPage.selectStrengthAttribute();

        // Пауза перед поиском героев
        await driver.sleep(5000);

        // Переход на страницу героя Axe
        await heroesPage.clickAxeHero();

        // Пауза для просмотра результата
        await driver.sleep(5000);

    } finally {
        await driver.sleep(5000);
        // Закрыть веб-драйвер после выполнения теста
        await driver.quit();
    }
}

runTest();
