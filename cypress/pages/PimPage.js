class PimPage {

    elements = {
        pimMenu: () => cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text'),
        addEmployeeBtn: () => cy.get('.orangehrm-header-container > .oxd-button'),
        firstName: () => cy.get('[name="firstName"]'),
        lastName: () => cy.get('[name="lastName"]'),
        saveButton: () => cy.get('.oxd-button--secondary'),

        idInput: () => cy.get('.oxd-input-group:contains("Employee Id") input'),
        searchButton: () => cy.get('button[type="submit"]'),
        tableRow: () => cy.get('.oxd-table-card')
    }

    clickPim() {
        this.elements.pimMenu().click()
    }

    clickAddEmployee() {
        this.elements.addEmployeeBtn().click()
    }

    createEmployee(firstName, lastName) {
        this.clickPim()
        this.clickAddEmployee()
        this.enterFirstName(firstName)
        this.enterLastName(lastName)
    }

    enterFirstName(firstName) {
        this.elements.firstName().type(firstName)
    }

    enterLastName(lastName) {
        this.elements.lastName( ).type(lastName)
    }

    clickSaveButton() {
        this.elements.saveButton().click()
    } 

    searchEmployeeById(employeeId) {
    this.elements.idInput().clear().type(employeeId);
    this.elements.searchButton().click({ force: true });
  }
}

export const pimPage = new PimPage()
