/* eslint-disable no-else-return */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

// Colors
const green = '#4CAF50';
const red = '#F44336';

// Utility functions

function selectIsEmpty(field) {
  if (SisEmpty(field.value.trim())) {
    //set field invalid
    setInvalid(field, `Select at least one`);
    return true;
  } else {
    //set field valid
    setValid(field);
    return false;
  }
}

function SisEmpty(value) {
  if (value === '0') return true;
  return false;
}

function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    // set field invalid
    setInvalid(field, 'Field must not be empty');
    return true;
  } else {
    // set field valid
    setValid(field);
    return false;
  }
}

function isEmpty(value) {
  if (value === '') return true;
  return false;
}

function setInvalid(field, message) {
  field.className = 'invalid form-control';
  field.nextElementSibling.innerHTML = message;
  field.nextElementSibling.style.color = red;
  field.style.border = '1px solid' + red;
  field.style.borderRadius = '4px';
  field.style.paddingLeft = '10px';
  field.style.outline = 'none !important';
}

function setValid(field) {
  field.className = 'valid form-control';
  field.nextElementSibling.innerHTML = '';
  field.style.border = '1px solid' + green;
  field.style.borderRadius = '4px';
  field.style.paddingLeft = '10px';
  field.style.outline = 'none !important';
}

function checkIfOnlyLetters(field) {
  if (/^[a-zA-Z ]+$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `Field Must Contain Only letters`);
    return false;
  }
}

function checkIfOnlyNumbers(field) {
  if (/^[-+]?\d*$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `Field Must Contain Only numbers`);
    return false;
  }
}

function digLength(field, maxi, indic) {
  if (field.value.length >= maxi) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `Field Must Contain At least ${maxi} ${indic}`);
    return false;
  }
}

function checkExtension(field) {
  var file = document.querySelector('#file');
  if (/\.(pdf)$/i.test(file.files[0].name) === false) {
    setInvalid(field, `Please Upload only pdf files`);
    return false;
  } else {
    setValid(field);
    return true;
  }
}

function meetLength(field, minLength, maxLength) {
  if (field.value.length >= minLength && field.value.length < maxLength) {
    setValid(field);
    return true;
  } else if (field.value.length < minLength) {
    setInvalid(field, `Field must be at least ${minLength} characters Long`);
    return false;
  } else {
    setInvalid(field, `Field must be at shorter than ${maxLength} characters`);
    return false;
  }
}

function containsCharacters(field, code) {
  let regEx;
  switch (code) {
    case 1:
      //Letters
      regEx = /(?=.*[a-zA-Z])/;
      return matchWithRegEx(regEx, field, 'Must Contain At least one letter');
    case 2:
      //Letters and Numbers
      regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
      return matchWithRegEx(
        regEx,
        field,
        'Must Contain At least one letter and one number'
      );
    case 3:
      //Uppercase, Lowercase and Numbers
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
      return matchWithRegEx(
        regEx,
        field,
        'Must Contain At least one uppercase, one Lowercase letters and one number'
      );

    case 4:
      //Uppercase, Lowercase, Numbers and special char.
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
      return matchWithRegEx(
        regEx,
        field,
        'Must Contain At least 1 uppercase, 1 Lowercase letters, 1 number and 1 special character'
      );

    case 5:
      //Uppercase, Lowercase, Numbers and special char.
      regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return matchWithRegEx(
        regEx,
        field,
        'Please Enter A valid E-mail address'
      );

    default:
      return false;
  }
}

function matchWithRegEx(regEx, field, message) {
  if (field.value.match(regEx)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, message);
    return false;
  }
}

// Validator functions
export const validateLastName = (input) => {
  // check if is empty
  if (checkIfEmpty(input)) return;
  //check if has only letters
  if (!checkIfOnlyLetters(input)) return;
  //check if has 10 Characters
  if (!digLength(input, 2, 'Characters')) return;
  return true;
};

export const validateFirstName = (input) => {
  // check if is empty
  if (checkIfEmpty(input)) return;
  //check if has only letters
  if (!checkIfOnlyLetters(input)) return;
  //check if has 10 Characters
  if (!digLength(input, 2, 'Characters')) return;
  return true;
};

export const validateEmail = (input) => {
  // check if is empty
  if (checkIfEmpty(input)) return;
  // validate email
  if (!containsCharacters(input, 5)) return;
  return true;
};

export const validateMobile = (input) => {
  //check if is empty
  if (checkIfEmpty(input)) return;
  //check if has only numbers
  if (!checkIfOnlyNumbers(input)) return;
  //check if has 10 Digits
  if (!digLength(input, 10, 'digits')) return;
  return true;
};

export const validateGender = (input) => {
  //check if is empty
  if (selectIsEmpty(input)) return;
  return true;
};

export const validateRole = (input) => {
  //check if is empty
  if (selectIsEmpty(input)) return;
  return true;
};
export const validateAddress = (input) => {
  //check if is empty
  if (selectIsEmpty(input)) return;
  return true;
};
