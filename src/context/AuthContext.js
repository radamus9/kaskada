import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children, initialRole = null }) => {
  const [role, setRole] = useState(initialRole);

  const login = (newRole) => setRole(newRole);
  const logout = () => setRole(null);

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
