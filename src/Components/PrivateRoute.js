import React from 'react';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function PrivateRoute({children}){
  const auth = useSelector((state) => state.auth);
  return auth.isAuthorized ? <>{children}</> : <Navigate to='/signin' />;
}