import _ from "lodash";
import React from "react";
import InputField from "components/inputs/InputField";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWorkout, editWorkout } from "actions/workoutActions";

class WorkoutEdit extends React.Component {
  state = { name: "", errors: {} };

  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.id);
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    const { workout } = this.props.workouts;
    console.log("Workout", workout);

    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }

    if (prevProps.workout !== this.props.workout) {
      this.setState({ name: this.state.name });
    }
  }

  onChange = e => {
    const workoutProps = { ...this.state };
    console.log("Props", workoutProps);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const workoutProps = { ...this.state };

    this.props.editWorkout(
      this.props.match.params.id,
      workoutProps,
      this.props.history
    );
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
          <Link
            to="/workouts"
            className="button is-danger is-large"
            style={{ marginTop: "20px" }}
          >
            Cancel
          </Link>
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

const mapStateToProps = ({ errors, workouts }) => {
  return { errors, workouts };
};

export default connect(
  mapStateToProps,
  { fetchWorkout, editWorkout }
)(withRouter(WorkoutEdit));
