'use client'
import React, { createContext, useState, useEffect } from "react";
import { useAccount } from 'wagmi';

interface User {
  semail?: string
  id?: string
  lastname?: string
  name?: string
  password?: string
  wallet?: string
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: (userData: any) => { },
  logout: () => { }
});

export const AuthProvider = ({ children }: any) => {
  const { address } = useAccount();

  const [user, setUser] = useState<User | null>(null);

  console.log('user', user);

  // Load user from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: any) => {
    // Save user data in state and localStorage
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    // Clear user data from state and localStorage
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    if (address) {
      login({
        wallet: address
      })
    } else {
      //logout()
    }
  }, [address])

  return (
    <AuthContext.Provider value={{ user: user || null, login, logout }}>
      {children}
    </AuthContext.Provider >
  );
};
