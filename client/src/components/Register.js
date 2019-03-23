import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { registerUser } from "actions/authActions";
import { withRouter } from "react-router-dom";
import InputField from "components/common/InputField";

class Register extends React.Component {
  onSubmit = formValues => {
    this.props.registerUser(formValues, this.props.history);
  };

  renderFields() {
    return (
      <React.Fragment>
        <Field label="Name" name="name" type="text" component={InputField} />
        <Field label="Email" name="email" type="text" component={InputField} />
        <Field
          label="Password"
          name="password"
          type="text"
          component={InputField}
        />
      </React.Fragment>
    );
  }
  render() {
    return (
      <div className="budget-new">
        <h1 className="title is-3">
          Register to start tracking your workouts!
        </h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          {this.renderFields()}
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

const mapStateToProps = ({ auth, errors }) => {
  return { auth, errors };
};

export default reduxForm({
  form: "registration"
})(
  connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register))
);
