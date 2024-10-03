class UserGuidePage {
    async open() {
        await browser.url('https://www.redmine.org/');
        await browser.pause(2000);
    }

    async clickUserGuide() {
        const userGuideLink = await $("a=User's Guide");
        await userGuideLink.scrollIntoView();
        await userGuideLink.click();
        await browser.pause(2000);
    }

    async clickUserAccounts() {
        const accountsSection = await $('a=User accounts');
        await accountsSection.scrollIntoView();
        await accountsSection.click();
        await browser.pause(2000);
    }

    async checkRegisterText() {
        const registerText = await $('h2=Register');
        const text = await registerText.getText();
        await expect(text).toContain('Register');
    }
}

export default UserGuidePage;
