import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createExercise } from "actions/exerciseActions";
import singleFormValidation from "components/validation/singleFormValidation";

class ExerciseNew extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title is-3">Create an exercise</h1>
        <Formik
          initialValues={{ name: "" }}
          validate={values => singleFormValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
            const { id } = this.props.match.params;
            const { history } = this.props;
            const exerciseProps = { ...values };
            setSubmitting(false);
            this.props.createExercise(id, exerciseProps, history);
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

// const mapStateToProps = ({ workouts }) => {
//   return { workouts };
// };

export default connect(
  null,
  { createExercise }
)(withRouter(ExerciseNew));
