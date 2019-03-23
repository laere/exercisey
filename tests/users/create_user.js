"use strict";
const assert = require("assert");
const User = require("../../models/User");

describe("Creating users", () => {
  it("saves a user", done => {
    const user = new User({
      name: "John Doe",
      email: "johndoe@test.com",
      password: "123456"
    });

    user.save().then(() => {
      // Has the user been saved successfully?
      // If user.isNew === true - user has not been saved
      // If user.isNew === false - user has been saved.
      assert(!user.isNew);
      done();
    });
  });
});
