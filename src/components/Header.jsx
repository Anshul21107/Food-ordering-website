import React, { useState } from "react";
import Logo from "../Image/logo1.png";
import {
  MdShoppingBasket,
  MdAdd,
  MdLogout,
  MdHome,
  MdMenu,
  MdAssignmentInd,
  MdOutlineDesignServices,
} from "react-icons/md";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Avatar from "../Image/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-8 md:p-6 md:px-16 bg-red-50">
      {/* desktop and tablets */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-x1 font-bold">Food Express</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
              <p className="text-xs text-white font-semibold">0</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-5 min-w-[30px] h-5 min-h-[30px] drop-shadow-xl rounded-full cursor-pointer"
              alt="userProfile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-8 right-0"
              >
                {user && user.email === "anshulkatiyar3149@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item
                      <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex item-center justify-between md:hidden w-full">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
            <p className="text-xs text-white font-semibold">0</p>
          </div>
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-x1 font-bold">Food Express</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-5 min-w-[30px] h-5 min-h-[30px] drop-shadow-xl rounded-full cursor-pointer"
            alt="userProfile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-8 right-0"
            >
              {user && user.email === "anshulkatiyar3149@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={() => setIsMenu(false)}
                  >
                    <MdAdd />
                    New Item
                  </p>
                </Link>
              )}
              <ul className="flex flex-col">
                <li
                  className="flex text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 gap-3"
                  onClick={() => setIsMenu(false)}
                >
                  <div className="py-1">
                    <MdHome />{" "}
                  </div>
                  <div>Home</div>
                </li>
                <li
                  className="flex text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 gap-3"
                  onClick={() => setIsMenu(false)}
                >
                  <div className="py-1">
                    <MdMenu />
                  </div>
                  <div>Menu</div>
                </li>
                <li
                  className="flex text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 gap-3"
                  onClick={() => setIsMenu(false)}
                >
                  <div className="py-1">
                    <MdAssignmentInd />
                  </div>
                  <div>About Us</div>
                </li>
                <li
                  className="flex text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 gap-3"
                  onClick={() => setIsMenu(false)}
                >
                  <div className="py-1">
                    <MdOutlineDesignServices />
                  </div>{" "}
                  <div>Service</div>
                </li>
              </ul>
              <p
                className="px-4 py-2 flex items-center gap-3 cursor-pointer bg-gray-200 hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                <MdLogout />
                Logout
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
