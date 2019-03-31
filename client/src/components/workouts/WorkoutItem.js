import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const pluralize = val => {
  return val > 1 || val === 0 ? val + " exercises" : val + " exercise";
};

const WorkoutItem = ({ workout }) => {
  return (
    <div className="card" key={workout._id} style={{ marginTop: "30px" }}>
      <header className="card-header">
        <p className="card-header-title">{workout.name}</p>
        <div className="card-header-icon">
          <span style={{ marginRight: "10px" }}>Created on:</span>{" "}
          <Moment format="MM/DD/YYYY">{workout.dateCreated}</Moment>
        </div>
      </header>
      <div className="card-content">
        <div>
          You currently have {pluralize(workout.exercises.length)} for this
          workout!
        </div>
      </div>
      <footer className="card-footer">
        <Link to={`/workouts/${workout._id}`} className="card-footer-item">
          Configure Workout
        </Link>
      </footer>
    </div>
  );
};

export default WorkoutItem;
