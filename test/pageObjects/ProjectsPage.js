class ProjectsPage {
    async open() {
        await browser.url('https://www.redmine.org/');
        await browser.pause(2000);
    }

    async clickAllProjects() {
        const redmine = await $('span=Redmine');
        await redmine.click();
        const allProjectsLink = await $('a=Все проекты');
        await allProjectsLink.waitForClickable({ timeout: 5000 });
        await allProjectsLink.click();
        await browser.pause(2000);
    }

    async checkProjectExists(projectId) {
        const links = await $$('a[href="/projects/redmine/issues?set_filter=1&status_id=%2A&tracker_id=1"]');
        for (let link of links) {
            const linkText = await link.getText();
            if (linkText === projectId) {
                console.log(`Text found: ${projectId}`);
                await expect(linkText).toBe(projectId);
                break; 
            }
        }
    }
}

export default ProjectsPage;
