import { errorMessages } from "../utils/constants";

export const validateDesiredName = (value) => {
  const regex = /^[a-zA-Z0-9]{0,20}$/;
  if (value.length > 20) {
    return errorMessages.invalidDesiredUsernameLength;
  }
  if (!regex.test(value)) {
    return errorMessages.invalidDesiredUsername;
  }
  return "";
};
export const validatePassword = (value) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[! @ # $ ^ & * ~])/;
  if (value.length < 8) {
    return errorMessages.invalidPasswordLength;
  }
  if (value.length > 20) {
    return errorMessages.invalidPasswordLength;
  }
  if (!regex.test(value)) {
    return errorMessages.invalidPassword;
  }
  if (value.split(" ").length > 1) {
    return errorMessages.invalidPasswordWhiteSpace;
  }
  return "";
};
export const validateName = (value) => {
  const regex = /^[a-zA-Z\s_]*$/;
  if (!regex.test(value)) {
    return errorMessages.invalidName;
  }
  return "";
};
export const validatePostalCode = (value) => {
  const regex = /^[1-9][0-9]{5}$/;
  if (!regex.test(value)) {
    return errorMessages.invalidPostalZipCode;
  }
  return "";
};
export const validateArea = (value) => {
  const regex = /^[a-zA-Z0-9\s]+$/;
  if (!regex.test(value)) {
    return errorMessages.invalidArea;
  }
  return "";
};
export const validatePhoneNumber = (value) => {
  const regex = /^[6-9]{1}[0-9]{9}$/;
  if (!regex.test(value)) {
    return errorMessages.invalidContactNumber;
  }
  return "";
};
export const validateEmail = (value) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(value)) {
    return errorMessages.invalidEmailAddress;
  }
  return "";
};
export const validateGender = (value) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!["Male", "Female"].includes(value)) {
    return errorMessages.invalidGender;
  }
  return "";
};
export const validateImage = (value) => {
  const ext = value.split(".")[1];
  console.log("==> ex:", ext)
  if (!["jpg", "png", "gif"].includes(ext)) {
    return errorMessages.invalidImage;
  }
  return "";
};
