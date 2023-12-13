const interneship = {
  profissional_profile: "Experiência em desenvolver ouvindo ótimas melodias",
  description:
    "Essa vaga é destinada a encontrar um desenvolvedor habilidoso que possa ser de grande utilidade para tonar o Sonhin ainda mais poderoso",
  office: "Desenvolvedor Músical",
  enterpriseId: "Sonhin",
  work_style: "Remoto",
  weekly_workload: 40,
  course: "ADS",
};

describe("Testes envolvendo registro de novas empresas", () => {
  before(() => {
    cy.visit("/entrar");
    cy.intercept({ method: "POST" }).as("routerPost");

    cy.login(
      Cypress.env("email_coordinator"),
      Cypress.env("password_coordinator"),
    );

    cy.wait("@routerPost").its("response.statusCode").should("eq", 201);
    cy.wait(500);
  });

  beforeEach(() => {
    cy.findByText("Adicionar estágio").click();
    cy.wait(500);
  });

  it("Deve criar nova vaga com sucesso", () => {
    cy.fillInputs(interneship);

    cy.findByText("Adicionar").should("exist").click();

    cy.intercept({ method: "POST" }).as("routerPost");
    cy.wait("@routerPost").its("response.statusCode").should("eq", 201);
  });
});
