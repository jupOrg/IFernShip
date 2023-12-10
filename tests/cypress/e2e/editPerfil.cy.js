import { v4 as uuidv4 } from "uuid";

const email = `${uuidv4()}@gmail.com`;

describe("Testes envolvendo edição de perfil", () => {
  before(() => {
    cy.visit("/");

    cy.pathRegister();

    cy.intercept({ method: "POST" }).as("routerPost");
    cy.register(email);

    cy.wait("@routerPost").its("response.statusCode").should("eq", 201);
    cy.wait(500);

    cy.get(`[data-cy="button-logout"]`).click();
    cy.visit("/entrar");
    cy.login(email);

    cy.wait("@routerPost").its("response.statusCode").should("eq", 201);
    cy.wait(500);
  });

  beforeEach(() => {
    cy.findAllByAltText("user image").click();
    cy.wait(500);
  });

  it("Verificando se é possiveel visualizar todos os dados com sucesso", () => {
    cy.get(`[data-cy="edit-name]`)
      .invoke("text")
      .should("not.be.empty")
      .and("eq", Cypress.env("username"));
    cy.get(`[data-cy="edit-email]`)
      .invoke("text")
      .should("not.be.empty")
      .and("eq", Cypress.env(email));
    cy.get(`[data-cy="edit-course]`).invoke("text").should("not.be.empty");
  });

  it("Editando o nome do usuário do perfil com sucesso", () => {
    cy.get(`[data-cy="edit-name]`).clear().type("new_name");
    cy.findByText("Salvar").should("exist").click();

    cy.wait("@routerPatch").its("response.statusCode").should("201")
    cy.wait(500)
  });

  it("Editando o email do usuário do perfil com sucesso", () => {
    const newEmail = `${uuidv4()}@gmail.com`;
    cy.get(`[data-cy="edit-email]`).clear().type(newEmail);
    cy.findByText("Salvar").should("exist").click();

    cy.wait("@routerPatch").its("response.statusCode").should("201")
    cy.wait(500)
  });
});
