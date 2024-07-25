Feature('Employee Management');

Scenario('register a new employee', ({ I }) => {
  I.amOnPage('/');
  I.fillField('#inputName', 'John Doe');
  I.fillField('#inputSalary', '50000');
  I.click('#saveButton');
  I.see('John Doe');
});

Scenario('search for an employee', ({ I }) => {
  I.amOnPage('/');
  I.fillField('#inputSearch', 'John Doe');
  I.click('#searchButton');
  I.see('John Doe');
});

Scenario('search for an employee and delete', ({ I }) => {
    I.amOnPage('/');
    I.fillField('#inputSearch', 'John Doe');
    I.click('#searchButton');
    I.see('John Doe');
    I.click('.deleteButton');
  });
