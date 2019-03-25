const singleFormValidation = values => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 2) {
    errors.name = "Name must be more than 2 characters long!";
  }
  return errors;
};

export default singleFormValidation;
