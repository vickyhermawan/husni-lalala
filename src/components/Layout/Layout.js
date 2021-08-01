import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="relative w-full">
        <div className="relative">
        <Header />
        {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
