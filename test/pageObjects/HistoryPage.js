class HistoryPage {
    async open() {
        await browser.url('https://www.redmine.org/');
        await browser.pause(2000);
    }

    async clickPrivacy() {
        const privacyLink = await $('a=Privacy Policy');
        await privacyLink.click();
        await browser.pause(2000);
    }

    async checkCurrentUrl() {
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toBe('https://www.redmine.org/projects/redmine/wiki/PrivacyPolicy');
    }

    async checkElements() {
        const dateElement = await $('a=Go MAEDA');
        await dateElement.scrollIntoView();
        const isDisplayed = await dateElement.isDisplayed();
        await expect(isDisplayed).toBe(true);

        const dateElement2 = await $('a=Redmine');
        await dateElement2.scrollIntoView();
        const isDisplayed2 = await dateElement2.isDisplayed();
        await expect(isDisplayed2).toBe(true);
    }
}

export default HistoryPage;
