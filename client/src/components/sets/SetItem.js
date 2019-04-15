import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWorkout } from "actions/workoutActions";
import { fetchExercise } from "actions/exerciseActions";
import { createSet } from "actions/setActions";

class SetItem extends React.Component {
  render() {
    const { workout } = this.props.workouts;
    return (
      <tr className="panel">
        <td>{this.props.set.repcount}</td>
        <td>{this.props.set.weight}</td>
        <td>
          <Link
            to={`/workouts/${workout._id}/exercises/${
              this.props.exerciseId
            }/sets/delete/${this.props.set._id}`}
            className="button is-small is-outlined"
          >
            Delete
          </Link>
          <Link
            to={`/workouts/${workout._id}/exercises/${
              this.props.exerciseId
            }/sets/repeat/${this.props.set._id}`}
            className="button is-small is-outlined"
          >
            Repeat
          </Link>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = ({ workouts }) => {
  return { workouts };
};

export default connect(
  mapStateToProps,
  { fetchExercise, createSet, fetchWorkout }
)(withRouter(SetItem));
