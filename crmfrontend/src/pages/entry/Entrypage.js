import React, { useState } from "react";
import Login from "../../components/login/Login";
import PasswordReset from "../../components/login/PasswordReset";
import "./entry.style.css";

const Entrypage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!password || !email) {
      alert("submit both the field");
    }

    console.log(email,+" " +password)
    // todo call the api
  };

  const onResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter the email");
    }

    // todo call the api
    console.log(email)
  };


  const formSwitcher = formType => {
    setFormLoad(formType)
  }

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron">
        {formLoad === "login" && (
          <Login
            handleOnChange={handleOnChange}
            email={email}
            password={password}
            onSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
          />
        )}

       {formLoad === "reset" && <PasswordReset
          handleOnChange={handleOnChange}
          email={email}
          password={password}
          onResetSubmit={onResetSubmit}
          formSwitcher={formSwitcher}
        />}
      </div>
    </div>
  );
};

export default Entrypage;
