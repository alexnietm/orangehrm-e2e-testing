
class LoginPage {
    elements = {
        username: () => cy.get('input[name="username"]'),
        password: () => cy.get('input[name="password"]'),
        loginBtn: () => cy.get('button[type="submit"]'),
        dashboardTitle: () => cy.get('.oxd-topbar-header-title'),

        errorMessage: () => cy.get('.oxd-alert-content-text'),

        profileMenu: () => cy.get('.oxd-userdropdown-name'),
        logoutBtn: () => cy.get('.oxd-userdropdown-link').contains('Logout')


    }
}
export const loginPage = new LoginPage();