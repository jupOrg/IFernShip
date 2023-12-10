import { v4 as uuidv4 } from "uuid";

describe("Testes envolvendo realizar login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Realizando login com sucesso", () => {
    cy.pathRegister();
    const email = `${uuidv4()}@gmail.com`;

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

  it("O Login deve falhar ao passar dados incorretos", () => {
    cy.findByText("Entrar").should("exist").click();
    const email = `${uuidv4()}error@gmail.com`;

    cy.intercept({ method: "POST" }).as("routerPost");
    cy.login(email);

    cy.wait("@routerPost").its("response.statusCode").should("not.eq", 201);
    cy.wait(500);

    cy.findAllByText("Usuário ou senha incorreto").should("exist")

    // cy.waitUntil(() => cy.get(`[data-cy="modal-error"]`).should("exists"))
  });
});
