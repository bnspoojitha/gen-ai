import React, { createContext, useContext, Dispatch, SetStateAction } from 'react';

// Define the context type
type GlobalContextType = {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    chats: { text: string; type: string }[];
    setChats: Dispatch<SetStateAction<{ text: string; type: string }[]>>; // Include setChats
};

// Create the context
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalState  = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export default GlobalContext;