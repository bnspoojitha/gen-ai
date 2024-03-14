import React, { useState, ReactNode } from 'react';
import GlobalContext from './GlobalStateContext';

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [searchText, setSearchText] = useState<string>('');
    const [chats, setChats] = useState<{ text: string; type: string }[]>([]);


  return (
    <GlobalContext.Provider value={{  searchText, setSearchText, chats, setChats }}>
      {children}
    </GlobalContext.Provider>
  );
};