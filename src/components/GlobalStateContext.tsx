import React, { createContext, useContext, Dispatch, SetStateAction } from 'react';

// Define the context type
type GlobalContextType = {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    chats: { text: string | any; type: string ; data?: any[] }[]; 
    setChats: Dispatch<SetStateAction<{ text: string; type: string }[]>>;
    chartHtml: string;
    setChartHtml: React.Dispatch<React.SetStateAction<string>>; 
    response: any; 
    setResponse: Dispatch<SetStateAction<any>>; 
    globalData: any[]; 
    setGlobalData: Dispatch<SetStateAction<any[]>>
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
