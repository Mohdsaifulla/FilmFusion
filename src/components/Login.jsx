import React, { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/validation";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSingIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const toggleSignUp = () => {
    setIsSignIn(!isSingIn);
  };
  const handleSingInSignUpButton = () => {
    const message = validation(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMessage(message);

    if (message) return;
    if (!isSingIn) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode},${errorMessage}`);
        });
    }
  };
  return (
    <div className="h-screen bgImage flex flex-col relative">
      <div className="h-[10%]">
        <Header />
      </div>

      <div className="w-full relative  flex items-center justify-center  opacity-85">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black  flex flex-col sm:w-[400px] w-full gap-4 absolute top-2 rounded-lg"
        >
          <label className="text-3xl font-semibold text-white pt-6 mx-4">
            {isSingIn ? "Sing in" : "Sign Up"}
          </label>
          {!isSingIn && (
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="bg-transparent text-white border p-4 mx-4 rounded"
            />
          )}
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            placeholder="Email"
            className="bg-transparent text-white border p-4 mx-4 rounded"
          />
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            placeholder="Password"
            className="bg-transparent text-white border p-4 mx-4 rounded"
          />
          <p className="text-red-600 text-sm mx-4">{errorMessage}</p>
          <button
            className="bg-red-600 rounded text-xl font-semibold p-2 mx-4 text-white hover:bg-red-700 opacity-100"
            onClick={handleSingInSignUpButton}
          >
            {isSingIn ? "Sing in" : "Sign Up"}
          </button>
          <div className="flex gap-2 text-white p-2 mx-4">
            <p className="">New to Netflix?</p>
            <p
              className="font-semibold cursor-pointer hover:text-gray-400"
              onClick={toggleSignUp}
            >
              Sign up Now
            </p>
          </div>
        </form>
      </div>

      <div className="absolute bottom-0 flex flex-col bg-black opacity-80 text-gray-400 w-full gap-4 px-16 py-8 ">
        <div>
          <p>Questions? Call 000-800-919-1694</p>
        </div>
        <div className="flex gap-4">
          <p>FAQ</p> <p>QHelp Center</p> <p>Terms of Use</p>
        </div>
        <div className="flex gap-4">
          <p>Privacy</p>
          <p>Coprporate Information</p>
          <p>Cookie Preferences</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
