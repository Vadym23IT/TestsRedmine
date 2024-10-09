# TestsRedmine

Цей проєкт містить автоматизовані тести для вебсайту Redmine з використанням WebdriverIO.

## Налаштування

### Клонування репозиторію

Спочатку потрібно клонувати репозиторій на локальну машину:

```bash
git clone https://github.com/Vadym23IT/TestsRedmine.git
cd TestsRedmine

Встановіть усі необхідні залежності:
npm install

Запуск тестів

Щоб запустити тести, використовуйте наступну команду:
npx wdio run wdio.conf.js
Ця команда запускає всі тести, які знаходяться у папці /test.

Опис тестових випадків
1. Підтримка самореєстрації користувачів
Цей тест перевіряє навігацію до розділу самореєстрації користувачів та взаємодію з налаштуваннями сторінки:

await userSelfRegistrationPage.open();
await userSelfRegistrationPage.clickUserSelfRegistration();
await userSelfRegistrationPage.scrollToSettings();
await userSelfRegistrationPage.clickSetting();

2. Перевірка проектів у розділі Redmine
Тест перевіряє кількість проектів у списку та наявність проекту з ID 10114:

await projectsPage.open();
await projectsPage.clickAllProjects();
await projectsPage.checkProjectExists('10114');

3. Перевірка списків, що використовуються на Redmine
Цей тест перевіряє відображення різних розділів на сторінці списків:

await listsPage.open();
await listsPage.clickThisPageLists();
await listsPage.checkSectionsAreDisplayed();

4. Перевірка тексту у розділі "Користувачі"
Тест навігації до керівництва користувача та перевірки тексту у секції реєстрації:

await userGuidePage.open();
await userGuidePage.clickUserGuide();
await userGuidePage.clickUserAccounts();
await userGuidePage.checkRegisterText();

5. Перевірка сторінок конфіденційності
Цей тест перевіряє завантаження сторінки конфіденційності та наявність важливих елементів на ній:

await historyPage.open();
await historyPage.clickPrivacy();
await historyPage.checkCurrentUrl();
await historyPage.checkElements();


allure generate allure-results --clean

Відкрийте звіт у браузері:
allure open

Усі тести виконуються з конфігурацією WebdriverIO, яка знаходиться у файлі wdio.conf.js. Переконайтеся, що середовище правильно налаштоване для роботи з вашою системою.
