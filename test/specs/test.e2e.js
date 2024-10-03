import UserSelfRegistrationPage from '../pageObjects/UserSelfRegistrationPage';
import ProjectsPage from '../pageObjects/ProjectsPage';
import ListsPage from '../pageObjects/ListsPage';
import UserGuidePage from '../pageObjects/UserGuidePage';
import HistoryPage from '../pageObjects/HistoryPage';

describe('Tests for Redmine website', () => {
    let userSelfRegistrationPage;
    let projectsPage;
    let listsPage;
    let userGuidePage;
    let historyPage;

    before(async () => {
        userSelfRegistrationPage = new UserSelfRegistrationPage();
        projectsPage = new ProjectsPage();
        listsPage = new ListsPage();
        userGuidePage = new UserGuidePage();
        historyPage = new HistoryPage();
    });

    it('Going to User self-registration support and check files', async () => {
        await userSelfRegistrationPage.open();
        await userSelfRegistrationPage.clickUserSelfRegistration();
        await userSelfRegistrationPage.scrollToFiles();
        await userSelfRegistrationPage.clickFiles();
    });

    it('Checking the number of projects in the Redmine section', async () => {
        await projectsPage.open();
        await projectsPage.clickAllProjects();
        await projectsPage.checkProjectExists('10114');
    });

    it('Checking lists who used Redmine and check texts', async () => {
        await listsPage.open();
        await listsPage.clickThisPageLists();
        await listsPage.checkSectionsAreDisplayed();
    });

    it('Checking accounts and text in "Register"', async () => {
        await userGuidePage.open();
        await userGuidePage.clickUserGuide();
        await userGuidePage.clickUserAccounts();
        await userGuidePage.checkRegisterText();
    });

    it('Checking history pages and text of them', async () => {
        await historyPage.open();
        await historyPage.clickHistory();
        await historyPage.checkCurrentUrl();
        await historyPage.checkDateElements();
    });
});
