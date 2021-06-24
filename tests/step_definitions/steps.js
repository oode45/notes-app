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
    I.click(`//button//*[contains(text(),'${name}')]/..`)
});

Then('вижу текст {string}', () => {
    I.see(`successful`)
});
