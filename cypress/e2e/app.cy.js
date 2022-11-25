/// <reference types="cypress" />

describe("App", () => {
    it("open signup form", () => {
        cy.visit("/");

        cy.get("input[name=name]").type("Martins Gouveia");
        cy.get("input[name=email]").type("goy@gmail.com");
        cy.get("input[name=password]").type("1234567890");

        cy.get("input").contains("Submit").click();

        cy.findByText("All right!").should("exist");
    });
});
