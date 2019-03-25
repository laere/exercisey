import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createWorkout } from "actions/workoutActions";
import singleFormValidation from "components/validation/singleFormValidation";

class WorkoutNew extends React.Component {
  render() {
    const { workout } = this.props.workouts;
    return (
      <div>
        <h1 className="title is-3">Create a workout</h1>
        <Formik
          initialValues={{ name: "" }}
          validate={values => singleFormValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
            const workoutProps = { ...values };
            setSubmitting(false);
            this.props.createWorkout(workoutProps, this.props.history);
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
  { createWorkout }
)(withRouter(WorkoutNew));
