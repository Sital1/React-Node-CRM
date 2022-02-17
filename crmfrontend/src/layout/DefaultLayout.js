import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

const DefaultLayout = ({children}) => {
  return (
    <div className="default-layout">
      <header className="header">
        <Header />
      </header>

      <main className="main">
         <Outlet />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
