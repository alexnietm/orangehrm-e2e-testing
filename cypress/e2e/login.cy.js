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
            
            // Login directo
            cy.escribir(loginPage.elements.username, user.username);
            cy.escribir(loginPage.elements.password, user.password);
            cy.miclick(loginPage.elements.loginBtn);

            // 1. ESPERA PROFESIONAL: En lugar de cy.wait(2000), 
            // esperamos a que la URL sea la correcta antes de seguir.
            cy.url().should('include', '/dashboard');

            // 2. ABRIR MENÚ: Esperamos a que el menú de perfil sea interactuable.
            // .should('be.visible') tiene un re-intento automático de hasta 4 segundos.
            loginPage.elements.profileMenu()
                .should('be.visible')
                .click();
            
            // 3. LOGOUT: Esperamos a que el botón de Logout aparezca en el DOM.
            loginPage.elements.logoutBtn()
                .should('be.visible')
                .click();

            // 4. VERIFICACIÓN FINAL: Confirmamos que volvimos al login.
            cy.url().should('include', '/auth/login');
            cy.get('.orangehrm-login-title').should('be.visible');
        });
    });
}); 

  