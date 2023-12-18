import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-between bg-red-500 px-10 py-6 items-center">
      <div className="flex flex-row items-center gap-10">
        <div className="text-3xl font-bold text-white">Kalvium</div>
        <div className="flex flex-row gap-6">
          <a href="" className="text-lg text-slate-100 font-semibold">
            About Us
          </a>
          <a href="" className="text-lg text-slate-100 font-semibold">
            Contacts
          </a>
          <a href="" className="text-lg text-slate-100 font-semibold">
            Courses
          </a>
        </div>
      </div>
      <button className="font-semibold text-white rounded px-6 py-2 bg-red-700 ">
        Login
      </button>
    </div>
  );
}

export default Navbar;
