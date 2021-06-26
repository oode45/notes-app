const { I } = inject();
// Add in your custom step files


Given('я нахожусь на странице регистрации', () => {
    I.amOnPage('/register')
});

Given('я нахожусь на странице входа', () => {
    I.amOnPage('/login')
});

When('я ввожу в форму данные:', (table) => {
    for (const id in table.rows) {
        if (id < 1) {
            continue;
        }
        const cells = table.rows[id].cells
        const field = cells[0].value;
        const value = cells[1].value;
        I.fillField(field, value)
    }

});

When('нажимаю на кнопку {string}', (name) => {
    I.wait(2)
    I.click(`//button//*[contains(text(),'${name}')]/..`)
});

Then('вижу текст {string}', (text) => {
    I.see(`${text}`)
});

Then('не вижу текст {string}', (text) => {
    I.dontSee(`${text}`)
});

Then('вижу уведомление {string}', () => {
    I.see(`successful`)
});

Given('я нахожусь на главной странице', () => {
    I.amOnPage('/')
});
