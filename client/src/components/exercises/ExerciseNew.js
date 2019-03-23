import React from "react";
import SingleForm from "components/common/SingleForm";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { createWorkout } from "actions/workoutActions";

class ExerciseNew extends React.Component {
  onSubmit = formValues => {
    console.log(formValues);
    // this.props.createWorkout(formValues, this.props.history);
  };

  render() {
    return (
      <div>
        <h1 className="title is-3">Create an execise</h1>
        <SingleForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null)(withRouter(ExerciseNew));
