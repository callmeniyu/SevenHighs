"use client";

import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  authenticate: (password: string) => boolean;
  logout: () => void;
}>({
  isAuthenticated: false,
  authenticate: () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedSession = localStorage.getItem("admin-session");
    if (storedSession) {
      const session = JSON.parse(storedSession);
      if (session.expiry > Date.now()) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("admin-session");
      }
    }
  }, []);

  const authenticate = (password: string) => {
    console.log("passsss", password);
    
    if (password === "admin123") {
      const session = { expiry: Date.now() + 3600 * 1000 }; // 1 hour expiry
      localStorage.setItem("admin-session", JSON.stringify(session));
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    router.push("/");
    localStorage.removeItem("admin-session");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
