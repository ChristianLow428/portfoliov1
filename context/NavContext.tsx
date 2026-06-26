"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type NavState = {
  open: boolean;
};

type NavContextValue = {
  navState: NavState;
  setNavState: React.Dispatch<React.SetStateAction<NavState>>;
  toggleNav: () => void;
  closeNav: () => void;
};

const NavContext = createContext<NavContextValue | null>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [navState, setNavState] = useState<NavState>({ open: false });

  const toggleNav = () => {
    setNavState((prev) => ({ ...prev, open: !prev.open }));
  };

  const closeNav = () => {
    setNavState((prev) => ({ ...prev, open: false }));
  };

  return (
    <NavContext.Provider value={{ navState, setNavState, toggleNav, closeNav }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within NavProvider");
  }
  return context;
}
