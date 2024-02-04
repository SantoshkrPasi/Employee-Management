// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Dashboard from '../Dashboard';
import { useAuth } from './AuthContext'; // Import the useAuth hook

function PrivateRoute({ children }) {
    // console.log(children);
    // console.log("Element" ,Element)
    //    const {user} = useAuth();
    const user = true;
    // console.log(rest)
    return user ?(
        // <Dashboard/>
        // <Element/>
     <div>{children}</div>
    ) :
    (
     <Navigate to ='/employeelogin' />   
    // <div>check</div>
    );
   
}

export default PrivateRoute;