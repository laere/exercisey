const User = require("../../../models/User");

describe("user", () => {
  it("should create a user object", () => {
    const user = new User({
      name: "Zack",
      email: "t@t.com",
      password: "12345"
    });

    expect(user).toHaveProperty("name", "Zack");
    expect(user).toHaveProperty("email", "t@t.com");
    expect(user).toHaveProperty("password", "12345");
  });
});
