Cypress.Commands.add("login", (email, pass) => {
  const password = pass || Cypress.env("password")
  cy.get(`[data-cy="login-email"]`).type(email);
  cy.get(`[data-cy="login-password"]`).type(password);
  cy.get(`[data-cy="login-save"]`).click();
});

Cypress.Commands.add("register", (email) => {
  cy.get(`[data-cy="register-name"]`).type(Cypress.env("username"));
  cy.get(`[data-cy="register-email"]`).type(email);
  cy.get(`[data-cy="register-password"]`).type(Cypress.env("password"));
  cy.get(`[data-cy="register-save"]`).click();
});

Cypress.Commands.add("pathRegister", (role = "Estudante") => {
  cy.findByText("Registrar-se").should("exist").click();
  cy.log(role)
  cy.findByText(role).should("exist").click();
});

Cypress.Commands.add("fillInputs", (objValues) => {
  cy.get(".default-input").each((input) => {
    const tag = input[0].nodeName
    const name = input[0].name
    if (tag === "INPUT" || tag === "TEXTAREA") {
      cy.wrap(input).type(objValues[name])
    }
  });
})