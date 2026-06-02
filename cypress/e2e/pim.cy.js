/// <reference types="cypress" />
import { pimPage } from "../pages/PimPage";

describe('Modulo de PIM - Gestion de Empleados', () => {
    let employeeId;

    beforeEach(() => {
        cy.visit('/web/index.php/auth/login');
        cy.loginOrangeHRM();
    });

    it('TC-04: Registrar un nuevo empleado con éxito', () => {
        pimPage.clickPim();
        pimPage.createEmployee('Mauro', 'Nieto');
        pimPage.clickSaveButton();
        
        cy.get('.oxd-toast-content', { timeout: 10000 }).should('be.visible');
        
        cy.get('.oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input')
            .should('not.have.value', '')
            .invoke('val')
            .then((id) => {
                employeeId = id.trim();
                cy.log("ID capturado: " + employeeId);
            });
    });

    it('TC-05: Buscar un empleado por ID', () => {
        cy.wrap(employeeId).should('not.be.undefined');

        pimPage.clickPim();
        pimPage.searchEmployeeById(employeeId);
        
        cy.contains('.oxd-table-card', employeeId, { timeout: 15000 })
            .should('be.visible');
    });

    it('TC-06: Eliminar un empleado por su ID con éxito', () => {
        cy.wrap(employeeId).should('not.be.undefined');

        pimPage.clickPim();
        pimPage.searchEmployeeById(employeeId);
        
        cy.contains('.oxd-table-card', employeeId, { timeout: 15000 })
            .find('.bi-trash')
            .click();
            
        cy.contains('button', 'Yes, Delete').click();
        cy.get('.oxd-toast-content', { timeout: 10000 }).should('contain', 'Success');
    });
});