import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../config/firebase.config";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(null);
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  //current user state
  useEffect(() => {
    axios.get("http://localhost:5000/mycart").then((res) => {
      setCartCount(res.data.length);
    });
  }, []);

  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubsCribe();
    };
  }, [user]);

  //login user
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //logout user
  const logOut = () => {
    return signOut(auth);
  };

  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={`/add-product`}>Add Product</Link>
      </li>
      <li>
        <Link to={`/`}>About</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown md:hidden block">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className="md:block hidden">
          <Link to={"/"} className="font-bold text-2xl">
            ZIOR
          </Link>
        </div>
      </div>
      <div className="navbar-center">
        <div
          tabIndex={0}
          className="md:flex list-none items-center space-x-3 hidden"
        >
          {navItems}
        </div>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Link to={`/mycart`}>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="badge badge-sm indicator-item text-red-500 font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          ></div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  user?.photoURL ||
                  `https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg`
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                {`${user?.displayName || `User`}`}
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              {!user ? (
                <button onClick={signInGoogle}>Log in with google</button>
              ) : (
                <button onClick={logOut}>Logout</button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
