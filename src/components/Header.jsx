import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addSearch } from "../store/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { changedLanguage } from "../store/langSlice";
const Header = () => {
  const toggle = useSelector((store) => store?.search.toggleSearch);
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
  const handleChangeLanguage = (e) => {
    dispatch(changedLanguage(e.target.value));
  };
  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-black w-full">
      <div className="px-16 py-4 ">
        <img src="/Netflix_logo.png" alt="logo" className="w-40" />
      </div>

      {user && (
        <div className="px-4">
          {toggle && (
            <select onChange={handleChangeLanguage}>
              {SUPPORTED_LANGUAGE.map((item) => (
                <option key={item.identifier} value={item.identifier}>
                  {item.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleSignOut}
            className="px-4 font-bold text-xl text-gray-200 cursor-pointer"
          >
            Logout
          </button>

          <button
            onClick={() => dispatch(addSearch())}
            className="bg-purple-400 p-1 rounded"
          >
            {toggle ? "Home" : "Search"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
