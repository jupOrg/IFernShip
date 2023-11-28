import { v4 as uuidv4 } from "uuid";

describe("Testes envolvendo realizar login", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    
    it("Realizando login com sucesso", () => {
        cy.pathRegister()
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
});
