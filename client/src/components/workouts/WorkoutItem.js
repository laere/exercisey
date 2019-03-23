import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const WorkoutItem = ({ workout }) => {
  return (
    <div className="card" key={workout._id} style={{ marginTop: "30px" }}>
      <header className="card-header">
        <p className="card-header-title">{workout.name}</p>
        <div className="card-header-icon">
          Created on: <Moment format="MM/DD/YYYY">{workout.dateCreated}</Moment>
        </div>
      </header>
      <footer className="card-footer">
        <Link to={`/workouts/${workout._id}`} className="card-footer-item">
          Configure Workout
        </Link>
      </footer>
    </div>
  );
};

export default WorkoutItem;
