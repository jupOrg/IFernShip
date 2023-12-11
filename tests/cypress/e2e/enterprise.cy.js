const enterprise = {
  name: "Sonhin",
  picture: "cypress/images/sonhin.svg",
  description:
    "Sonhin é uma empresa visionária de criação de música com inteligência artificial. Tem como missão elevar a música para novos patamares, através de big data e interfaces simples para sintetizadores poderosos. Foi fundada por @yolisses em sua jornada para ganhar capital inicial para criar nano robôs autorreplicantes de uso geral.",
  cnpj: 88899977711,
  email: "enterprise@sonhim.com.br",
};

describe("Testes envolvendo pagina de estágios para usuários comuns", () => {
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
    cy.findByText("Adicionar empresa").click();
    cy.wait(500);
  });

  it("Registrando nova empresa com sucesso", () => {
    cy.fillInputs(enterprise);
    cy.get(`input[type=file]`).selectFile(enterprise.picture, { force: true });
    
    cy.findByText("Adicionar").should("exist").click();
    
    cy.intercept({ method: "POST" }).as("routerPost");
    cy.wait("@routerPost").its("response.statusCode").should("eq", 201);
  });
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
