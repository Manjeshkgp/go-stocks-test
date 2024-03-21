"use client"

import { tabsData, tabDataI } from '@/data/data';
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';

export interface sidebarContextI {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
  currentTab: tabDataI;
  setCurrentTab: Dispatch<SetStateAction<tabDataI>>;
}

const SidebarContext = createContext<sidebarContextI | undefined>(undefined);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }
  return context;
};

interface SidebarProviderProps {
  children: React.ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<tabDataI>(tabsData[0]);

  return (
    <SidebarContext.Provider value={{ openSidebar, setOpenSidebar, currentTab, setCurrentTab }}>
      {children}
    </SidebarContext.Provider>
  );
};