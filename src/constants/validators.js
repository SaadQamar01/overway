const phoneRegExp = RegExp(/^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/);
const emailRegExp = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const passwordRegExp = RegExp(/^(?=.*\d).{8,36}$/i);

export const validateEmail = email => {
  return emailRegExp.test(email);
};

export const validatePhoneNumber = phoneNum => {
  return phoneRegExp.test(phoneNum);
};

export const validateExperience = experience => {
  return experience.includes('.') ? false : true;
};

export const validatePassword = password => {
  return passwordRegExp.test(password);
};

export const checkNameIsValid = text => {
  // only Number, English and Arabic Alphabete is allowed
  return new RegExp(/(.*[a-z]){3}/i).test(text);
};
