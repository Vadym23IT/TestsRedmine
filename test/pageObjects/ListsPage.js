class ListsPage {
    async open() {
        await browser.url('https://www.redmine.org/');
        await browser.pause(2000);
    }

    async clickThisPageLists() {
        const scroll = await $('a=This page lists');
        await scroll.scrollIntoView();
        await scroll.click();
        await browser.pause(2000);
    }

    async checkSectionsAreDisplayed() {
        const source = await $('h2=Open source software');
        await expect(source).toBeDisplayed(); 

        const publicSector = await $('h2=Public sector');
        await publicSector.scrollIntoView();
        await expect(publicSector).toBeDisplayed();

        const otherSection = await $('h2=Other');
        await otherSection.scrollIntoView();
        await expect(otherSection).toBeDisplayed(); 
    }
}

export default ListsPage;
