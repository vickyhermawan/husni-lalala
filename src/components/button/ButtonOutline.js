import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="flex flex-row align-items font-medium py-2 px-3 sm:px-3 text-gray-500 bg-white-500 outline-none rounded-l-full rounded-r-full hover:bg-green-500 hover:text-white-500">
      {children}
    </button>
  );
};

export default ButtonOutline;
