import React, { useState } from "react";
import Login from "../../components/login/Login";
import PasswordReset from "../../components/login/PasswordReset";
import "./entry.style.css";

const Entrypage = () => {
  const [formLoad, setFormLoad] = useState("login");
  

  const onResetSubmit = (e) => {
    e.preventDefault();
  };


  const formSwitcher = formType => {
    setFormLoad(formType)
  }

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron">
        {formLoad === "login" && (
          <Login
            // handleOnChange={handleOnChange}
            // email={email}
            // password={password}
            // onSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
          />
        )}

       {formLoad === "reset" && <PasswordReset
          // handleOnChange={handleOnChange}
          // email={email}
          // password={password}
          // onResetSubmit={onResetSubmit}
          formSwitcher={formSwitcher}
        />}
      </div>
    </div>
  );
};

export default Entrypage;
