import { v4 as uuidv4 } from "uuid";

describe("Testes envolvendo registro de usuário", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.pathRegister();
  });

  it("Registrando novo usuário com sucesso", () => {
    const email = `${uuidv4()}@gmail.com`;

    cy.intercept({ method: "POST" }).as("routerPost");
    cy.register(email);

    cy.wait("@routerPost").its("response.statusCode").should("eq", 201);
    // cy.url().should("not.include", "/register");
  });

  it("Inpedindo registro de novo usuário se já existir", () => {
    const email = `${uuidv4()}@gmail.com`;

    cy.intercept({ method: "POST" }).as("routerPost");
    cy.register(email);

    cy.wait("@routerPost").its("response.statusCode").should("eq", 201);
    cy.wait(500);

    cy.get(`[data-cy="button-logout"]`).click();

    cy.visit("/cadastro");
    cy.register(email);

    cy.wait("@routerPost").its("response.statusCode").should("not.eq", 201);
    cy.wait(500);
    
    cy.waitUntil(() => cy.get(`[data-cy="modal-error"]`).should("exists"));
  });

//   it("Verificando se as permissões estão sendo obedecidas", () => {
//     cy.findByRole(/Adicionar estágio/i).should("not.exist")
//     cy.findByRole(/Adicionar empresa/i).should("not.exist")
//     cy.findByRole(/Estágios adicionados/i).should("not.exist")
//     cy.findByRole(/Coordenador/).should("not.exist")
//     cy.findByRole(/Estudante/).should("exist")
//   })
});
