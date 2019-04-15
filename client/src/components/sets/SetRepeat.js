import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createSet, fetchSet } from "actions/setActions";
import setValidation from "components/validation/setValidation";

class SetRepeat extends React.Component {
  componentDidMount() {
    const { id, exerciseId, setId } = this.props.match.params;

    this.props.fetchSet(id, exerciseId, setId);
  }

  render() {
    const { id, exerciseId } = this.props.match.params;
    const { set } = this.props.workouts;
    console.log("SET", set);
    console.log("State", this.state);
    return (
      <div>
        <h1 className="title is-3">Create a set</h1>
        <Formik
          enableReinitialize
          initialValues={{
            repcount: set.repcount,
            weight: set.weight
          }}
          validate={values => setValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
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
              <Link
                to={`/workouts/${id}`}
                className="button is-danger is-large"
                style={{ marginTop: "20px" }}
              >
                Cancel
              </Link>
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
  { createSet, fetchSet }
)(withRouter(SetRepeat));
