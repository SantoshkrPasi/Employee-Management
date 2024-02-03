// // AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if the user is already authenticated (e.g., by checking localStorage)
//     const storedUser = !!Cookies.get('token');
//     console.log(storedUser);
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const login = (userData) => {
//     localStorage.setItem('userauthtoken', userData.email);
//     setUser(userData.email);
//   };

//   const logout = () => {
//     localStorage.removeItem('userauthtoken');
//     setUser(null);
//   };

//   const value = {
//     user,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
