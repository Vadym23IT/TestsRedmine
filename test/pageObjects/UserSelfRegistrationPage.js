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
  
    async scrollToFiles() {
      let footer = await $('legend=Файлы (3)');
      await footer.scrollIntoView();
      await browser.pause(2000);
    }
  
    async clickFiles() {
      let files = await $('legend=Файлы (3)');
      await files.click();
      await browser.pause(2000);
    }
}

export default UserSelfRegistrationPage;