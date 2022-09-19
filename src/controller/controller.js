// Controller làm nhiệm vụ validate thông tin
// Tạo hàm validateLoginInfo nhận vào email và password trong controller
// Export hàm validateLoginInfo
// Import hàm validateLoginInfo trong view
// Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
// từ form

// Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
// có phải email hợp lệ không, có bỏ trống trường nào không

// Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
// từ những trường hợp validate đó;
import { renderErrorMessage } from "../view/index";
import { createNewUser, loginsuccess, updateNewProfile } from "../model/index";

import { setActiveScreen } from "../view/index";

export let validateLoginInfo = (email, password) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("errLogin", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("errLogin", "Invalid email");
  } else {
    renderErrorMessage("errLogin", "");
  }

  if (!password) {
    renderErrorMessage("errLogin1", "Please enter your password");
  } else {
    renderErrorMessage("errLogin1", "");
  }
  if (email && password) {
    loginsuccess(email, password);
  }
};
export let validateResetPassword = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("err-resetEmail", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("err-resetEmail", "Invalid email");
  } else {
    renderErrorMessage("err-resetEmail", "");
  }
};
export let validateRegister = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  if (!firstName) {
    renderErrorMessage("err-firstName", "Please enter your firstname");
  } else {
    renderErrorMessage("err-firstName", "");
  }
  if (!lastName) {
    renderErrorMessage("err-lastName", "Please enter your lastname");
  } else {
    renderErrorMessage("err-lastName", "");
  }

  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("err-EmaillDK", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("err-EmaillDK", "Invalid email");
  } else {
    renderErrorMessage("err-EmaillDK", "");
  }

  if (!password) {
    renderErrorMessage("err-passwold", "Please enter your password");
  } else {
    renderErrorMessage("err-passwold", "");
  }
  if (!confirmPassword) {
    renderErrorMessage("err-confirm-passwold", "Please enter your password");
  } else if (confirmPassword !== password) {
    renderErrorMessage("err-confirm-passwold", " Your password Err");
  } else {
    renderErrorMessage("err-confirm-passwold", "");
  }
  if (
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword &&
    confirmPassword === password
  ) {
    createNewUser(firstName, lastName, email, password);
    setTimeout(function () {
      setActiveScreen("loginPage"), 5000;
    });
    updateNewProfile(firstName, lastName);
  }
};
