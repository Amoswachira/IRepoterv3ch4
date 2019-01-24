describe("IRepoter application e2e testing", () => {
  beforeEach(() => {
    cy.fixture("admin").as("admin");
    cy.fixture("user").as("user");
  });
  // login an admin user
  it("Should be able to login: admin", function() {
    cy.visit("/admin.html");

    cy.get('input[name="username"]')
      .type(this.admin.name)
      .should("have.value", this.admin.name);
    cy.get('input[name="password"]')
      .type(this.admin.password)
      .should("have.value", this.admin.password);
    cy.get("#Login").submit();
    cy.location("pathname").should("eq", "/IRepoterv3ch4/UI/admin-area.html");
  });

  // login an normal user
  it("Should be able to login:Normal user", function() {
    cy.visit("/index.html");

    cy.get('input[name="username"]')
      .type(this.user.name)
      .should("have.value", this.user.name);
    cy.get('input[name="password"]')
      .type(this.user.password)
      .should("have.value", this.user.password);
    cy.get("#Login").submit();
    cy.location("pathname").should("eq", "/IRepoterv3ch4/UI/user-profile.html");
  });
});
