const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExerciseSchema = require("./Exercise");

const WorkoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String
  },
  exercises: [ExerciseSchema],
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Workout = mongoose.model("workouts", WorkoutSchema);
