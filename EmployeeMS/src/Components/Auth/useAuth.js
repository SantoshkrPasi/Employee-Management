// useAuth.js
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const useAuth = () => {
  const [cookies, removeCookie] = useCookies(['token']);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = cookies.token;

    if (token) {
      // You can add additional validation logic here
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [cookies.token]);

  const logout = () => {
    // Clear local authentication state
    // removeCookie('token');

    // Update the local state
    setIsAuthenticated(false);
  };

  return { isAuthenticated, logout };
};

export default useAuth;