import React from 'react'

import {Outlet, Navigate} from 'react-router-dom'
const isAuth = true;

const PrivateRoute = () => {
  return (
    isAuth ? <Outlet />:<Navigate to="/" />
  )
}

export default PrivateRoute