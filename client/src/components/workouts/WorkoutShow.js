import React from "react";
import Moment from "react-moment";
import Spinner from "components/common/Spinner";
import ExerciseList from "components/exercises/ExerciseList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWorkout } from "actions/workoutActions";

class WorkoutShow extends React.Component {
  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.id);
  }

  render() {
    const { workout, loading } = this.props.workouts;

    if (!workout || loading) {
      return <Spinner />;
    }

    return (
      <div>
        <Link
          to="/workouts"
          className="button is-primary is-large"
          style={{ marginTop: "20px" }}
        >
          Go Back
        </Link>
        <div className="card" key={workout._id} style={{ marginTop: "30px" }}>
          <header className="card-header">
            <p className="card-header-title">{workout.name}</p>
            <div className="card-header-icon">
              Created on:{" "}
              <Moment format="MM/DD/YYYY">{workout.dateCreated}</Moment>
            </div>
          </header>
          <footer className="card-footer">
            <Link
              to={`/workouts/edit/${workout._id}`}
              className="card-footer-item"
            >
              Edit
            </Link>
            <Link
              to={`/workouts/delete/${workout._id}`}
              className="card-footer-item"
            >
              Delete
            </Link>
            <Link
              to={`/workouts/${workout._id}/exercises/new`}
              className="card-footer-item"
            >
              Add Exercise
            </Link>
          </footer>
        </div>
        <ExerciseList workout={workout} />
      </div>
    );
  }
}

const mapStateToProps = ({ workouts }) => {
  return { workouts };
};

export default connect(
  mapStateToProps,
  { fetchWorkout }
)(WorkoutShow);
