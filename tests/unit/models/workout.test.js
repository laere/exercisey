const Workout = require("../../../models/Workout");

describe("workout", () => {
  it("should create a workout object", () => {
    const workout = new Workout({
      name: "workout"
    });

    expect(workout).toHaveProperty("name", "workout");
  });
});
