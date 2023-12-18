import React from "react";

function Card() {
  return (
    <div className="px-10 py-6 border shadow-lg rounded-lg bg-white my-16 mx-10 w-fit flex gap-6 hover:cursor-pointer">
      <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
      <div className="flex flex-col">
        <h4 className="text-2xl font-bold">Kalvium Store</h4>
        <p className="text-lg font-medium text-gray-600">
          We have a new course!
        </p>
      </div>
    </div>
  );
}

export default Card;
