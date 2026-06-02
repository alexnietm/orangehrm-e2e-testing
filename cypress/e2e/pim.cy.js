/// <reference types="cypress" />
import { pimPage } from "../pages/PimPage"; 

describe('Modulo de PIM - Gestion de Empleados ', () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login');
        cy.loginOrangeHRM();
    
    })

    it('TC-04: Registrar un nuevo empleado con éxito', () => {
        pimPage.clickPim();
        pimPage.clickAddEmployee();
        pimPage.enterFirstName('Mauro');
        pimPage.enterLastName('Nieto');
        pimPage.clickSaveButton();
        cy.get('.oxd-toast-content').should('be.visible').and('contain', 'Success');
        cy.url().should('include', '/pim/viewPersonalDetails')
        
    });
});