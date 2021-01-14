import emailRegex from "email-regex";

export const validateSignUp = (email, password) => {
  console.log(email, emailRegex().test(email));
  console.log(password);
  if (emailRegex().test(email) && !!password) {
    return true;
  }
  return false;
};
