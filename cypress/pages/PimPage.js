class PimPage {

    elements = {
        pimMenu: () => cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text'),
        addEmployeeBtn: () => cy.get('.orangehrm-header-container > .oxd-button'),
        firstName: () => cy.get('[name="firstName"]'),
        lastName: () => cy.get('[name="lastName"]'),
        saveButton: () => cy.get('.oxd-button--secondary'),

        idInput: () => cy.get('label').contains('Employee Id').parent().parent().find('input'),
        searchButton: () => cy.get('button[type="submit"]'),
        tableRow: () => cy.get('.oxd-table-body .oxd-table-card, .oxd-table-body .oxd-table-row'),


        deleteIcon: () => cy.get('.oxd-table-cell-actions .bi-trash'),
        confirmDeleteBtn: () => cy.contains('button', 'Yes, Delete')
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

  deleteEmployeeById(employeeId) {
    this.elements.deleteIcon().click({ force: true });
    this.elements.confirmDeleteBtn().click({ force: true });
  }
}

export const pimPage = new PimPage()
