import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createSet } from "actions/setActions";
import singleFormValidation from "components/validation/singleFormValidation";

class SetNew extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title is-3">Create a workout</h1>
        <Formik
          initialValues={{ repcount: 0, weight: "Bodyweight" }}
          onSubmit={(values, { setSubmitting }) => {
            const { id, exerciseId } = this.props.match.params;
            console.log(id);
            console.log(exerciseId);
            setSubmitting(false);
            this.props.createSet(id, exerciseId, values, this.props.history);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label className="label">Rep Count:</label>
              <Field type="number" name="repcount" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="repcount"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Weight</label>
              <Field type="text" name="weight" className="input" />
              <ErrorMessage
                className="help is-danger"
                name="weight"
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
  { createSet }
)(withRouter(SetNew));
