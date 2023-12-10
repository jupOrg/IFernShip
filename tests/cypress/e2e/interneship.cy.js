import { v4 as uuidv4 } from "uuid";

const email = `${uuidv4()}@gmail.com`;

const interneship = {
  isActive: true,
  position: "Rockstar",
  enterpriseId: "sonhin"
}

describe("Testes envolvendo registro de novas empresas", () => {
  before(() => {
    cy.visit("/entrar");
    cy.intercept({ method: "POST" }).as("routerPost");
    
    cy.login(
      Cypress.env("email_coordinator"),
      Cypress.env("password_coordinator")
    );

    cy.wait("@routerPost").its("response.statusCode").should("eq", 201);
    cy.wait(500);
  });

  beforeEach(() => {
    cy.findByLabelText("Adicionar estagio").click();
    cy.wait(500);
  });

  it("Deve criar nova vaga com sucesso", () => {
    cy.fillInputs(interneship)
  })

});
