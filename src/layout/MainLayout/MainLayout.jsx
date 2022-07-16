import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
