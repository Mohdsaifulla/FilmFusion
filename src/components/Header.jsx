import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscibe();
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/ErrorPage");
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
