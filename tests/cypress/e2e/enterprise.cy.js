import { v4 as uuidv4 } from "uuid";

describe("Testes envolvendo pagina de estágios para usuários comuns", () => {
  beforeEach(() => {
    cy.visit("/cadastro");
    const email = `${uuidv4()}@gmail.com`;

    cy.intercept({ method: "POST" }).as("routerPost");
    cy.register(email);

    cy.wait("@routerPost").its("response.statusCode").should("eq", 201);
    cy.wait(500);
  });

  it("Verificando se as permissões estão sendo obedecidas", () => {
    cy.findByRole(/Adicionar estágio/i).should("not.exist")
    cy.findByRole(/Adicionar empresa/i).should("not.exist")
    cy.findByRole(/Estágios adicionados/i).should("not.exist")
    cy.findByRole(/Coordenador/).should("not.exist")
    cy.findByRole(/Estudante/).should("exist")
  })

  // it("Verificando se a barra de pesquisa está funcionando", () => {
  //   cy.findByText("input")
  // })
});


// describe("Testes envolvendo pagina de estágios para coordenador do curso", () => {
//     beforeEach(() => {
//       cy.visit("/cadastro");
//       const emailCoordinator = Cypress.env("email_coordinator")
//       const passwordCoordinator = Cypress.env("password_coordinator")

//       cy.intercept({ method: "POST" }).as("routerPost");
//       cy.register(email);
  
//       cy.wait("@routerPost").its("response.statusCode").should("eq", 201);
//       cy.wait(500);
//     });
  
//     it("Verificando se as permissões estão sendo obedecidas", () => {
//       cy.findByText(/Adicionar Estágio/).should("be.visible")
//       cy.findByText(/Adicionar Empresa/).should("be.visible")
//       cy.findByText(/Estágios adicionados/).should("be.visible")
//       cy.findByText(/Coordenador/).should("be.visible")
//       cy.findByText(/Estudante/).should("not.be.visible")
//     })
  
//     it("Verificando se a barra de pesquisa está funcionando", () => {
//       cy.findByText("input")
//     })
//   });