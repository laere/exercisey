import React from "react";
import { reduxForm, Field } from "redux-form";
import { loginUser } from "actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import InputField from "components/common/InputField";

class Login extends React.Component {
  componentDidMount() {
    const { isAuthenticated } = this.props.auth;

    if (isAuthenticated) {
      this.props.history.push("/workouts");
    }
  }

  componentDidUpdate() {
    const { isAuthenticated } = this.props.auth;

    if (isAuthenticated) {
      this.props.history.push("/workouts");
    }
  }

  onSubmit = formValues => {
    this.props.loginUser(formValues);
  };

  renderFields() {
    return (
      <React.Fragment>
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
      <div>
        <h1 className="title is-3">Login</h1>
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

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default reduxForm({ form: "login" })(
  connect(
    mapStateToProps,
    { loginUser }
  )(withRouter(Login))
);
