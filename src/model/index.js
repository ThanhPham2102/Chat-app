import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setActiveScreen } from "../view/index";
import { renderErrorMessage } from "../view/index";
export let createNewUser = (firstName, lastName, email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password) //promise
    .then((userCredential) => {
      console.log(userCredential);
      renderErrorMessage("server-secces-message", "Successfully Subscribed");
      renderErrorMessage("server-error-message", "");
      //////
      const user = auth.currentUser;
      console.log(user);
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      //   console.log(errorCode, errorMessage);

      renderErrorMessage("server-error-message", errorMessage);
      renderErrorMessage("server-secces-message", "");
    });
};
/////sigin
export let loginsuccess = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // Swal.fire({
      //   position: "centent",
      //   icon: "success",
      //   title: "Succsess ",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });

      setActiveScreen("chatPage");
      updateProfile(firstName, lastName);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log("that bai");
      console.log(errorMessage.replace("Firebase: Error", ""));
      Swal.fire({
        position: "centent",
        icon: "warning",
        title: `${errorMessage.replace("Firebase: Error ", "")}`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
};

import { updateProfile } from "firebase/auth";
export let updateNewProfile = (firstName, lastName) => {
  const auth = getAuth();

  updateProfile(auth.currentUser, {
    displayName: `${firstName} ${lastName}`,
    photoURL: "",
  })
    .then(() => {
      // Profile updated!
      // ...
      console.log("thanhcong");
      console.log(displayName);

      // // const auth = getAuth();
      // const user = auth.currentUser;

      // if (user !== null) {
      //   user.providerData.forEach((profile) => {
      //     console.log("Sign-in provider: " + profile.providerId);
      //     console.log("  Provider-specific UID: " + profile.uid);
      //     console.log("  Name: " + profile.displayName);
      //     console.log("  Email: " + profile.email);
      //     console.log("  Photo URL: " + profile.photoURL);
      //   });
      // }
    })
    .catch((error) => {
      // An error occurred
      // ...
      console.log("that bai");
    });
};
