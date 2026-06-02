class PimPage {

    elements = {
        pimMenu: () => cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text'),
        addEmployeeBtn: () => cy.get('.orangehrm-header-container > .oxd-button'),
        firstName: () => cy.get('[name="firstName"]'),
        lastName: () => cy.get('[name="lastName"]'),
        saveButton: () => cy.get('.oxd-button--secondary')
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
}

export const pimPage = new PimPage()
