const setValidation = values => {
  let errors = {};

  if (!values.repcount) {
    errors.repcount = "Rep count is required.";
  }

  if (!values.weight) {
    errors.weight = "Weight is required.";
  }

  return errors;
};

export default setValidation;
