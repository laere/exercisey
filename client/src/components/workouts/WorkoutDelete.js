import React from "react";
import Modal from "components/common/Modal";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteWorkout } from "actions/workoutActions";
import { Link } from "react-router-dom";

class WorkoutDelete extends React.Component {
  renderActions() {
    const { id } = this.props.match.params;
    console.log(this.props);
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteWorkout(id, this.props.history)}
          className="button is-danger"
        >
          Delete
        </button>
        <Link to={`/workouts/${id}`} className="button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          title="Delete Workout"
          content="Are you sure you want to delete this workout?"
          actions={this.renderActions()}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { deleteWorkout }
)(withRouter(WorkoutDelete));
