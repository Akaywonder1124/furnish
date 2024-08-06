import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    try {
      createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  const logOut = async () => {
    try {
      signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(auth.currentUser?.email);
  return (
    <div>
      <input
        placeholder="Email.."
        className="bg-white border-4 mr-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password.."
        className="bg-white border-4 mr-4"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={signIn}>
        Sign in
      </button>
      <button className="btn btn-accent" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <button className="btn btn-secondary" onClick={logOut}>
        Logout
      </button>
    </div>
  );
}
