import React from "react";
import { reduxForm, Field, SubmissionError } from "redux-form";
import { connect } from "react-redux";
import InputField from "components/common/InputField";

class SingleForm extends React.Component {
  state = { errors: {} };
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  onSubmit = formValues => {
    console.log("Form Values", formValues);
    console.log("PROPS", this.props.errors);

    this.props.onSubmit(formValues);

    if (!formValues.name) {
      throw new SubmissionError({
        name: this.props.errors
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field label="Name" name="name" type="text" component={InputField} />
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

const mapStateToProps = ({ errors }) => {
  return { errors };
};

export default reduxForm({})(connect(mapStateToProps)(SingleForm));
