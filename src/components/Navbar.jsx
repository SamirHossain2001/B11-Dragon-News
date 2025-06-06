import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userLogo from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  // Logout
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        alert("Logged out successfully");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex items-center justify-between">
      <div className="min-w-[150px] text-sm text-gray-600">
        {user ? user.email : ""}
      </div>
      <div className="nav flex gap-2 text-accent">
        <NavLink className="px-2 py-1 rounded" to="/">
          Home
        </NavLink>
        <NavLink className="px-2 py-1 rounded" to="/about">
          About
        </NavLink>
        <NavLink className="px-2 py-1 rounded" to="/career">
          Career
        </NavLink>
      </div>
      <div className="login-btn flex gap-5 items-center">
        <img
          className="w-12 rounded-full"
          src={`${user ? user.photoURL : userLogo}`}
          alt=""
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
