import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { editExercise, fetchExercise } from "actions/exerciseActions";
import singleFormValidation from "components/validation/singleFormValidation";

class ExeciseEdit extends React.Component {
  render() {
    const { id, exerciseId } = this.props.match.params;
    const { history } = this.props;
    return (
      <div>
        <h1 className="title is-3">Edit an exercise</h1>
        <Formik
          initialValues={{ name: "" }}
          validate={values => singleFormValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
            const exerciseProps = { ...values };
            setSubmitting(false);
            this.props.editExercise(id, exerciseId, exerciseProps, history);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <label className="label">Name:</label>
              <Field
                type="text"
                name="name"
                className="input"
                value={values.name}
              />
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

export default connect(
  null,
  { editExercise, fetchExercise }
)(withRouter(ExeciseEdit));
