import React, { useState } from "react";
import { ExpandableCard } from "../components/ExpandableCard";
import InputElement from "../components/InputElements";
import "../styles/registrationform.css";
import { errorMessages } from "../utils/constants";
import {
  validateArea,
  validateDesiredName,
  validateEmail,
  validateGender,
  validateImage,
  validateName,
  validatePassword,
  validatePhoneNumber,
  validatePostalCode,
} from "../validations/form-validations";

const defaultValues = {
  desiredUsername: "",
  choosePassword: "",
  secretQuestion: "",
  answer: "",
  name: "",
  gender: "",
  age: "",
  country: "India",
  location: "",
  postalZipCode: "",
  area: "",
  presentAddress: "",
  contactNumber: "",
  emailAddress: "",
  image: "",
};

const defaultErrors = {
  desiredUsername: "",
  choosePassword: "",
  secretQuestion: "",
  answer: "",
  name: "",
  gender: "",
  age: "",
  location: "",
  postalZipCode: "",
  area: "",
  presentAddress: "",
  contactNumber: "",
  emailAddress: "",
  image: "",
};

const RegistrationForm = () => {
  const [collapseData, setCollapseData] = useState({
    collapse1: false,
    collapse2: false,
  });

  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);

  const handleCollapse = (number) => {
    const collapseVar = "collapse" + number;
    console.log("==> collapse: " + collapseVar);
    setCollapseData({
      ...collapseData,
      [collapseVar]: !collapseData[collapseVar],
    });
  };

  const validateField1 = (name, value) => {
    switch (name) {
      case "desiredUsername":
        return setErrors({
          ...errors,
          desiredUsername: validateDesiredName(value),
        });
      case "choosePassword":
        return setErrors({
          ...errors,
          choosePassword: validatePassword(value),
        });
      case "name":
        return setErrors({
          ...errors,
          name: validateName(value),
        });
      case "postalZipCode":
        return setErrors({
          ...errors,
          postalZipCode: validatePostalCode(value),
        });
      case "area":
        return setErrors({
          ...errors,
          area: validateArea(value),
        });
      case "contactNumber":
        return setErrors({
          ...errors,
          contactNumber: validatePhoneNumber(value),
        });
      case "emailAddress":
        return setErrors({
          ...errors,
          emailAddress: validateEmail(value),
        });
      case "image":
        return setErrors({
          ...errors,
          image: validateImage(value),
        });
      case "gender":
        return setErrors({
          ...errors,
          gender: validateGender(value),
        });
    }
  };
  const validateField = (name, value) => {
    if (
      value === "" &&
      !["secretQuestion", "asnwer", "area", "image"].includes(name)
    ) {
      return errorMessages[name];
    }
    switch (name) {
      case "desiredUsername":
        return validateDesiredName(value);
      case "choosePassword":
        return validatePassword(value);
      case "name":
        return validateName(value);
      case "postalZipCode":
        return validatePostalCode(value);
      case "area":
        return validateArea(value);
      case "contactNumber":
        return validatePhoneNumber(value);
      case "emailAddress":
        return validateEmail(value);
      case "image":
        return value !== "" ? validateImage(value) : "";
      case "gender":
        return validateGender(value);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = validateField(name, value);
    return setErrors({
      ...errors,
      [name]: error,
    });
  };

  const isValidated = () => {
    let validated = true;
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      console.log(key);
      const value = formData[key];
      const error = validateField(key, value);
      if (![null, undefined, ""].includes(error)) {
        validated = false;
      }
      newErrors[key] = error;
    });
    setErrors(newErrors);
    return validated;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidated()) {
      alert("Congratulations! You are done.");
    }
  };

  const renderSection1 = () => {
    return (
      <div className="section1 flex align-center flex-column">
        <InputElement
          label="Desired username"
          name="desiredUsername"
          value={formData.desiredUsername}
          error={errors.desiredUsername}
          handleChange={handleChange}
          required
          style={{ width: "25%" }}
        />
        <InputElement
          label="Choose Password"
          name="choosePassword"
          value={formData.choosePassword}
          error={errors.choosePassword}
          handleChange={handleChange}
          required
        />
        <InputElement
          label="Secret question"
          name="secretQuestion"
          value={formData.secretQuestion}
          error={errors.secretQuestion}
          handleChange={handleChange}
          inputType="select"
          options={["Your favourite game"]}
          defaultOptionText="Select Secret Question"
        />
        <InputElement
          label="Answer"
          name="answer"
          value={formData.answer}
          error={errors.answer}
          handleChange={handleChange}
        />
      </div>
    );
  };
  const renderSection2 = () => {
    return (
      <div className="section1 flex align-center flex-column">
        <InputElement
          label="Name"
          name="name"
          value={formData.name}
          error={errors.name}
          handleChange={handleChange}
          required
        />
        <div className="flex align-center">
          <div className="spacer"></div>
          <div className="flex align-center gender_age">
            <InputElement
              label="Gender"
              name="gender"
              value={formData.gender}
              error={errors.gender}
              handleChange={handleChange}
              inputType="select"
              options={["Male", "Female"]}
              required
            />
            <InputElement
              label="Age"
              name="age"
              value={formData.age}
              error={errors.age}
              handleChange={handleChange}
              required
              inputType="select"
              options={[
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
              ]}
            />
          </div>
        </div>
        <InputElement
          label="Country"
          name="country"
          value={formData.country}
          error={errors.country}
          handleChange={handleChange}
          readOnly
          style={{ border: "none", fontWeight: "bold" }}
        />
        <InputElement
          label="Location"
          name="location"
          value={formData.location}
          error={errors.location}
          handleChange={handleChange}
          inputType="select"
          options={["Bihar"]}
          defaultOptionText="Select your location"
          required
        />
        <InputElement
          label="Postal/Zip code"
          name="postalZipCode"
          value={formData.postalZipCode}
          error={errors.postalZipCode}
          handleChange={handleChange}
          required
        />
        <InputElement
          label="Area"
          name="area"
          value={formData.area}
          error={errors.area}
          handleChange={handleChange}
        />
        <InputElement
          label="Present address"
          name="presentAddress"
          value={formData.presentAddress}
          error={errors.presentAddress}
          handleChange={handleChange}
          required
          inputType="textarea"
          rows={4}
        />
        <InputElement
          label="Contact Number"
          name="contactNumber"
          type="number"
          value={formData.contactNumber}
          error={errors.contactNumber}
          handleChange={handleChange}
          required
        />
        <InputElement
          label="Email address"
          name="emailAddress"
          type="email"
          value={formData.emailAddress}
          error={errors.emailAddress}
          handleChange={handleChange}
          required
        />
        <InputElement
          label="Upload Photo"
          name="image"
          type="file"
          value={formData.image}
          error={errors.image || "(*.jpg, *.png, *.gif)"}
          handleChange={handleChange}
          accept="image/*"
        />
        <div className="flex">
          <div style={{ width: "50%" }}></div>
          <button type="submit" className="registrationform__button">
            Continue {">>"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="registrationform">
      <div className="registrationform__header flex align-center">
        <h3>Tutor Registration Form</h3>
        <p>
          <span className="error">*</span> Required fields
        </p>
      </div>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <ExpandableCard
          title="Tutor Login Information"
          isCollapsed={collapseData.collapse1}
          handleClick={() => handleCollapse(1)}
        >
          {renderSection1()}
        </ExpandableCard>
        <ExpandableCard
          title="Personal Details & Tutor Contact Information"
          isCollapsed={collapseData.collapse2}
          handleClick={() => handleCollapse(2)}
        >
          {renderSection2()}
        </ExpandableCard>
      </form>
    </div>
  );
};

export default RegistrationForm;
