import React from "react";
import Modal from "components/common/Modal";
import { connect } from "react-redux";
import { deleteExercise } from "actions/exerciseActions";
import { Link, withRouter } from "react-router-dom";

class ExerciseDelete extends React.Component {
  renderActions() {
    const { id, exerciseId } = this.props.match.params;
    console.log(this.props.match);
    return (
      <React.Fragment>
        <button
          onClick={() =>
            this.props.deleteExercise(id, exerciseId, this.props.history)
          }
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
          title="Delete Exercise"
          content="Are you sure you want to delete this exercise?"
          actions={this.renderActions()}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { deleteExercise }
)(withRouter(ExerciseDelete));
