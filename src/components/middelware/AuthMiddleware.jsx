import Cookies from 'js-cookie';
import React from 'react'
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// const isAuthenticated = !!Cookies.get('token'); 
const AuthMiddleware = ({children}) => {
    const isAuthenticated = !!Cookies.get('token'); 
    if (isAuthenticated){ return children}
    else {
     return <Navigate to="/login" />
    }
  }
export default AuthMiddleware
