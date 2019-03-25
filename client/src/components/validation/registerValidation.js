const registerValidation = values => {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required.";
  } else if (values.name.length < 2) {
    errors.name = "Name must be more than 2 characters long!";
  }

  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  return errors;
};

export default registerValidation;
