/// <reference types="cypress" />
import { loginPage } from "../pages/LoginPage";

describe('Modulo de login', () => {

    beforeEach(() => {
      
        cy.visit('/web/index.php/auth/login');
    });

    it('TC-01: Iniciar sesión con credenciales válidas', () => {
        cy.fixture('login_ok').then((credentials) => {
            const user = credentials[0];
            cy.escribir(loginPage.elements.username, user.username);
            cy.escribir(loginPage.elements.password, user.password);
            cy.miclick(loginPage.elements.loginBtn);
            cy.verificarUrl('/dashboard');
        });
    });

    it('TC-02: Debería mostrar mensaje de error con credenciales inválidas', () => {
        cy.fixture('login_error').then((errorData) => {
            const data = errorData[0];
            cy.escribir(loginPage.elements.username, data.username);
            cy.escribir(loginPage.elements.password, data.password);
            cy.miclick(loginPage.elements.loginBtn);
            cy.get('.oxd-alert-content-text').should('be.visible').and('contain', data.errorMessage);
        });
    });

     it('TC-03: Debería cerrar sesión correctamente', () => {
         cy.fixture('login_ok').then((credentials) => {
             const user = credentials[0];

            cy.escribir(loginPage.elements.username, user.username);
            cy.escribir(loginPage.elements.password, user.password);
            cy.miclick(loginPage.elements.loginBtn);

               cy.url().should('include', '/dashboard');

            loginPage.elements.profileMenu()
            .should('exist')
            .should('be.visible')
            .click({ force: true });

            loginPage.elements.logoutBtn()
            .should('exist')
            .should('be.visible')
            .click({ force: true });

            cy.url().should('include', '/auth/login');
            cy.get('.orangehrm-login-title').should('be.visible');
        });
     });

}); 

  