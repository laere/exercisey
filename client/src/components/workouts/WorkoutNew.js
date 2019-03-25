import React from "react";
import InputField from "components/inputs/InputField";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createWorkout } from "actions/workoutActions";

class WorkoutNew extends React.Component {
  state = { name: "", errors: null };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const workoutProps = { ...this.state };
    this.props.createWorkout(workoutProps, this.props.history);
  };

  render() {
    const { errors } = this.props;
    console.log("Errors", this.state.errors);
    return (
      <div>
        <h1 className="title is-3">Create a workout</h1>
        <form onSubmit={this.onSubmit}>
          <InputField
            label="Name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onChange}
            errors={errors}
          />
          <button
            type="submit"
            className="button is-primary is-large"
            style={{ marginTop: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ errors }) => {
  return { errors };
};

export default connect(
  mapStateToProps,
  { createWorkout }
)(withRouter(WorkoutNew));
