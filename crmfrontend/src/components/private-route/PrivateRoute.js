import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { fetchNewAccessJWT } from "../../api/userApi";

import { loginSuccess } from "../login/LoginSlice";

const PrivateRoute = () => {
  const { isAuth } = useSelector((state) => state.login);
  
  const dispatch = useDispatch();
  useEffect(() => {
    const updateAccessJWT = async()=>{
      const res = await fetchNewAccessJWT();
      res && dispatch(loginSuccess());
    }
    updateAccessJWT();
    sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [isAuth, dispatch]);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
