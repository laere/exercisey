import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { editExercise, fetchExercise } from "actions/exerciseActions";
import singleFormValidation from "components/validation/singleFormValidation";

class ExeciseEdit extends React.Component {
  componentDidMount() {
    const { id, exerciseId } = this.props.match.params;
    this.props.fetchExercise(id, exerciseId);
  }

  render() {
    const { exercise } = this.props.workouts;
    return (
      <div>
        <h1 className="title is-3">Edit an exercise</h1>
        <Formik
          initialValues={{ name: "" }}
          validate={values => singleFormValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
            const { id, exerciseId } = this.props.match.params;
            const { history } = this.props;
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

const mapStateToProps = ({ workouts }) => {
  return { workouts };
};

export default connect(
  mapStateToProps,
  { editExercise, fetchExercise }
)(withRouter(ExeciseEdit));
