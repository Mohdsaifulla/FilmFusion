import React from "react";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/ErrorPage")
      });
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-black w-full">
      <div className="px-16 py-4 ">
        <img src="/Netflix_logo.png" alt="logo" className="w-40" />
      </div>
      {user && (
        <div className="px-16 font-bold text-xl text-gray-200 cursor-pointer">
          <button onClick={handleSignOut}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Header;
