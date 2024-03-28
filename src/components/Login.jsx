import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSingIn, setIsSignIn] = useState(true);
  const toggleSignUp = () => {
    setIsSignIn(!isSingIn);
  };

  // sm:w-[400px]  gap-4 rounded-lg p-4 absolute md:top-[15%] w-full md:left-[32%]  top-40
  return (
    <div className="h-screen bgImage flex flex-col relative">
      <div className="h-[10%]">
        <Header />
      </div>

      <div className="w-full relative  flex items-center justify-center">
        <form className="bg-black opacity-80 flex flex-col sm:w-[400px] w-full gap-4 absolute top-2">
          <label className="text-3xl font-semibold text-white pt-6 mx-4">
            {isSingIn ? "Sing in" : "Sign Up"}
          </label>
          {!isSingIn && (
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent text-white border p-4 mx-4 rounded"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent text-white border p-4 mx-4 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent text-white border p-4 mx-4 rounded"
          />
          <button className="bg-red-600 rounded text-xl font-semibold p-2 mx-4 text-white hover:bg-red-700">
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
