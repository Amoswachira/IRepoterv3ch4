function logIn() {
  let tokenn = localStorage.getItem("token");
  localStorage.setItem("tokenn", tokenn);
}
function logOut() {
  localStorage.removeItem("token");
}
describe("Testing the  functionality, This is the checklist", () => {
  it("should login a user", () => {
    let tokenn = "";
    logIn();
    expect(tokenn).toBe(tokenn);
  });
  it("should logout a user", () => {
    let token = localStorage.getItem("token");
    localStorage.setItem("token", token);
    logOut();
    expect(token).toBe(null);
  });
});
