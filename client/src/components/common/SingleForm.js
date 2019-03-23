import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "components/common/InputField";

class SingleForm extends React.Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
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

export default reduxForm({
  form: "singleform"
})(SingleForm);
