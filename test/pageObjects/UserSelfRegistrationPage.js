class UserSelfRegistrationPage {
    async open() {
      await browser.url('https://www.redmine.org/');
      await browser.pause(2000);
    }
  
    async clickUserSelfRegistration() {
      let urlSelf = await $('a=User self-registration');
      await urlSelf.click();
      await browser.pause(2000);
    }
  
    async scrollToSettings() {
      let footer = await $('a=Self-registration setting');
      await footer.scrollIntoView();
      await browser.pause(2000);
    }
  
    async clickSetting() {
      let files = await $('a=Redmine settings');
      await files.click();
      await browser.pause(2000);
    }
}

export default UserSelfRegistrationPage;