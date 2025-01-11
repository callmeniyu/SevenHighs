"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context value
interface SidebarContextType {
  open: boolean;
  toggleSidebar: () => void;
}

// Create the context with the appropriate type
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Props for the SidebarProvider
interface SidebarProviderProps {
  children: ReactNode;
}

// SidebarProvider implementation
export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to access the context
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
