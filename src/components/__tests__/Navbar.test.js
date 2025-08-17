import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { AuthProvider } from '../../context/AuthContext';

describe('Navbar role-based links', () => {
  test('user does not see admin links', () => {
    render(
      <AuthProvider initialRole="user">
        <Navbar />
      </AuthProvider>
    );
    expect(screen.queryByText(/Admin Panel/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });

  test('admin does not see user links', () => {
    render(
      <AuthProvider initialRole="admin">
        <Navbar />
      </AuthProvider>
    );
    expect(screen.queryByText(/Dashboard/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Admin Panel/i)).toBeInTheDocument();
  });
});
