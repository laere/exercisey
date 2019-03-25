import _ from "lodash";
import React from "react";
import InputField from "components/inputs/InputField";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { editExercise } from "actions/exerciseActions";

class ExerciseEdit extends React.Component {
  state = { name: "", errors: {} };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { history } = this.props;
    const { id, exerciseId } = this.props.match.params;
    const exerciseProps = { ...this.state };

    console.log(this.props.match.params);

    this.props.editExercise(id, exerciseId, exerciseProps, history);
  };

  render() {
    const { errors } = this.props;
    return (
      <div>
        <h1 className="title is-3">Edit your exercise</h1>
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
            to={`/workouts/${this.props.match.params.id}`}
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
  { editExercise }
)(withRouter(ExerciseEdit));
