describe("IRepoter application e2e testing", () => {
  beforeEach(() => {
    cy.fixture("admin").as("admin");
    cy.fixture("user").as("user");
    cy.fixture("newuser").as("newuser");
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

  // sigin up a new user >> Registration
  it("Should be able to sign up a new user", function() {
    cy.visit("/index.html");

    cy.get('input[name="firstname"]')
      .type(this.newuser.firstname)
      .should("have.value", this.newuser.firstname);
    cy.get('input[name="lastname"]')
      .type(this.newuser.lastname)
      .should("have.value", this.newuser.lastname);
    cy.get('input[name="usernamee"]')
      .type(this.newuser.usernamee)
      .should("have.value", this.newuser.usernamee);
    cy.get('input[name="passwordd"]')
      .type(this.newuser.password)
      .should("have.value", this.newuser.password);
    cy.get('input[name="email"]')
      .type(this.newuser.email)
      .should("have.value", this.newuser.email);
    cy.get('input[name="othername"]')
      .type(this.newuser.othername)
      .should("have.value", this.newuser.othername);
    cy.get('input[name="phoneNumber"]')
      .type(this.newuser.phoneNumber)
      .should("have.value", this.newuser.phoneNumber);
    cy.get("#signup").submit();
    cy.location("pathname").should("eq", "/IRepoterv3ch4/UI/user-profile.html");
  });
});
