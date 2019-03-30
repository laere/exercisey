import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { editWorkout } from "actions/workoutActions";

class WorkoutEdit extends React.Component {
  // state = { name: "", errors: {} };
  //
  // onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  //
  // onSubmit = e => {
  //   e.preventDefault();
  //
  //   const { history } = this.props;
  //   const { id } = this.props.match.params;
  //   const workoutProps = { ...this.state };
  //
  //   this.props.editWorkout(id, workoutProps, history);
  // };

  render() {
    const { history } = this.props;
    const { workout } = this.props.workouts;
    const { id } = this.props.match.params;
    return (
      <div>
        <h1 className="title is-3">Edit a workout</h1>
        <Formik
          initialValues={{ name: workout.name }}
          validate={values => {
            let errors = {};
            if (!values.name) {
              errors.name = "Name is required";
            } else if (values.name.length < 2) {
              errors.name = "Name must be more than 2 characters long!";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const workoutProps = { ...values };
            setSubmitting(false);
            this.props.editWorkout(id, workoutProps, history);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label className="label">Name:</label>
              <Field type="text" name="name" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="name"
                component="div"
                style={{ fontSize: "24px" }}
              />

              <button
                type="submit"
                className="button is-primary is-large"
                style={{ marginTop: "20px" }}
                disabled={isSubmitting}
                onSubmit={this.onSubmit}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = ({ workouts }) => {
  return { workouts };
};

export default connect(
  mapStateToProps,
  { editWorkout }
)(withRouter(WorkoutEdit));
