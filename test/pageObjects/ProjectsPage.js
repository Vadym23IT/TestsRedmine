class ProjectsPage {
    async open() {
        await browser.url('https://www.redmine.org/');
        await browser.pause(2000);
    }

    async clickAllProjects() {
        let plugins = await $('a=Plugins');
        await plugins.click();
    }

    async checkProjectExists(projectId) {
        const pluginElement = await $('a=WBS (Work Breakdown Structure)_');
        const isDisplayed = await pluginElement.isDisplayed();
        await expect(isDisplayed).toBe(true);

        const pluginElement2 = await $('a=Timesheet Essential By Redmine X');
        await pluginElement2.scrollIntoView();
        const isDisplayed2 = await pluginElement2.isDisplayed();
        await expect(isDisplayed2).toBe(true);
    }
}

export default ProjectsPage;
