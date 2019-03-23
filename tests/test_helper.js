"use strict";
const mongoose = require("mongoose");

// Executed once for your entire test suite.
before(done => {
  mongoose.connect(
    "mongodb://localhost:27017/users_test",
    { useNewUrlParser: true }
  );

  // mongoose.connection
  //   .once("open", () => {
  //     done();
  //   })
  //   .on("error", error => console.warn("Warning", error));
});

beforeEach(done => {});
