export const validateFormData = (name, email, password) => {
  if (name !== undefined) {
    let isNameValid =
      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
        name
      );

    if (!isNameValid) return "Name is not valid.";
  }

  let isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!isEmailValid) return "Email is not valid.";

  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPassValid) return "Password is not valid.";
  return null;
};
