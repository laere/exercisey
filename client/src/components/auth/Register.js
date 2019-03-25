import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { registerUser } from "actions/authActions";
import { withRouter } from "react-router-dom";

class Register extends React.Component {
  render() {
    const { errors } = this.props;
    console.log(errors);
    return (
      <div className="budget-new">
        <h1 className="title is-3">
          Register to start tracking your workouts!
        </h1>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validate={values => {
            let errors = {};
            if (!values.name) {
              errors.name = "Name is required.";
            } else if (values.name.length < 2) {
              errors.name = "Name must be more than 2 characters long!";
            }

            if (!values.email) {
              errors.email = "Email is required.";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Password is required.";
            } else if (values.password.length < 6) {
              errors.password = "Password must be at least 6 characters long.";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            this.props.registerUser(values, this.props.history);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <label className="label">Name:</label>
              <Field
                type="text"
                name="name"
                value={values.name}
                className="input"
              />
              <ErrorMessage
                className="help is-danger"
                name="name"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Email:</label>
              <Field
                type="text"
                name="email"
                value={values.email}
                className="input"
              />
              <ErrorMessage
                className="help is-danger"
                name="email"
                component="div"
                style={{ fontSize: "24px" }}
              />
              <label className="label">Password:</label>
              <Field
                type="text"
                name="password"
                value={values.password}
                className="input"
              />
              <ErrorMessage
                className="help is-danger"
                name="password"
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

const mapStateToProps = ({ errors }) => {
  return { errors };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
