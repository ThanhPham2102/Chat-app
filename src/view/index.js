import { loginPage } from "../pages/loginPage/loginPage";
import { chatPage } from "../pages/chatPage/chatPage";
import { resetPass } from "../pages/resetPassWorld/resetPass";
import { registerPage } from "../pages/registerPage/registerPage";
import {
  validateLoginInfo,
  validateResetPassword,
  validateRegister,
} from "../controller/controller";
// function renderErrorMessage
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};
//  Hiện màn hình là các case
export let setActiveScreen = (screenName) => {
  let app = document.getElementById("app"); //
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("login-form");
      if (loginForm) {
        console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = loginForm.email.value;
          const password = loginForm.password.value;
          validateLoginInfo(email, password);
        });
      }
      const createAccountFromLogin = document.getElementById(
        "create-accout_from_login"
      );
      console.log(createAccountFromLogin);
      if (createAccountFromLogin) {
        createAccountFromLogin.onclick = function () {
          setActiveScreen("registerPage");
        };
      }
      const resetPasswordFromLogin = document.getElementById(
        "reset-password__from_login"
      );
      if (resetPasswordFromLogin) {
        resetPasswordFromLogin.onclick = () => {
          setActiveScreen("resetPass");
        };
      }

      break;
    case "chatPage":
      if (app) {
        app.innerHTML = chatPage;
      }

      break;
    case "resetPass":
      if (app) {
        app.innerHTML = resetPass;
      }
      const resetPassWorld = document.getElementById("reset-password");

      if (resetPassWorld) {
        // console.log(resetPassWorld);

        resetPassWorld.addEventListener("submit", (event) => {
          event.preventDefault();
          const resetEmail = resetPassWorld.resetEmail.value;
          validateResetPassword(resetEmail);
        });
      }
      const loginFromReset = document.getElementById("login-from__reset");
      if (loginFromReset) {
        loginFromReset.onclick = function () {
          setActiveScreen("loginPage");
        };
      }

      break;

    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      // kiemtradangki
      const registerPage1 = document.getElementById("registerPage1");
      if (registerPage1) {
        registerPage1.addEventListener("submit", (event) => {
          event.preventDefault();
          const firstName = registerPage1.firstname.value;
          const lastName = registerPage1.lastName.value;
          const emailDK = registerPage1.emailDK.value;
          const passwordDK = registerPage1.passwordDK.value;
          const confirmPasswordDK = registerPage1.confirmpasswordDK.value;
          validateRegister(
            firstName,
            lastName,
            emailDK,
            passwordDK,
            confirmPasswordDK
          );
        });
      }

      ////////////
      const registerPage12 = document.getElementById("DKbox_loginHere");
      console.log(registerPage12);
      if (registerPage12) {
        registerPage12.onclick = function () {
          setActiveScreen("loginPage");
        };
      }

      break;

    default:
      break;
  }
};

// tra loi cho nguoi xem
