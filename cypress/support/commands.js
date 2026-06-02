// cypress/support/commands.js

Cypress.Commands.add('escribir', (selector, dato) => { 
        selector().should('be.visible').clear().type(dato);
});

Cypress.Commands.add('miclick', (selector) => {
    selector().should('be.visible').click();
});

Cypress.Commands.add('verificarUrl', (urlPart) => {
    cy.url().should('include', urlPart);
});

Cypress.Commands.add('verificarTexto', (selector, textoEsperado) => {
    selector().should('be.visible').and('contain', textoEsperado);
});


Cypress.Commands.add('loginOrangeHRM', (username = 'Admin', password = 'admin123') => {
  cy.get('input[name="username"]').type(username)
  cy.get('input[name="password"]').type(password)
  cy.get('button[type="submit"]').click()
})