import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "./firebase";

function RegisterFireBase(email, password, data, setError, navigate) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      setError(error.code)
      // ..
    });
}

export default RegisterFireBase;

const Update = ()=>{
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
}