import React from "react";
import SingleForm from "components/common/SingleForm";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createExercise } from "actions/exerciseActions";

class ExerciseNew extends React.Component {
  onSubmit = formValues => {
    console.log(formValues);
    this.props.createExercise(
      formValues,
      this.props.history,
      this.props.match.params.id
    );
  };

  render() {
    return (
      <div>
        <h1 className="title is-3">Create an execise</h1>
        <SingleForm onSubmit={this.onSubmit} form="newExercise" />
      </div>
    );
  }
}

export default connect(
  null,
  { createExercise }
)(withRouter(ExerciseNew));
