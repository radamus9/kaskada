import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { role } = useContext(AuthContext);

  return (
    <nav>
      {role === 'admin' && (
        <>
          <a href="/admin">Admin Panel</a>
          <a href="/settings">Settings</a>
        </>
      )}
      {role === 'user' && (
        <>
          <a href="/dashboard">Dashboard</a>
          <a href="/profile">Profile</a>
        </>
      )}
    </nav>
  );
};

export default Navbar;
