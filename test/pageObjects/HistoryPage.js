class HistoryPage {
    async open() {
        await browser.url('https://www.redmine.org/');
        await browser.pause(2000);
    }

    async clickHistory() {
        const historyLink = await $('a=История страниц');
        await historyLink.click();
        await browser.pause(2000);
    }

    async checkCurrentUrl() {
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toBe('https://www.redmine.org/projects/redmine/wiki/date_index');
    }

    async checkDateElements() {
        const firsturl = await $('a=PluginICalendarExport');
        await firsturl.scrollIntoView();

        const dateElement = await $('h3=2023-02-28');
        const isDisplayed = await dateElement.isDisplayed();
        await expect(isDisplayed).toBe(true);

        const lasturl = await $('a=DeSubmissions');
        await lasturl.scrollIntoView();

        const dateElement2 = await $('h3=2021-03-19');
        const isDisplayed2 = await dateElement2.isDisplayed();
        await expect(isDisplayed2).toBe(true);
    }
}

export default HistoryPage;
