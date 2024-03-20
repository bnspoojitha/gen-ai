import React, { createContext, useContext, Dispatch, SetStateAction } from 'react';
import { chatTypes, Chat } from './GlobalStateTypes';

type GlobalContextType = {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    chats: Chat[]; 
    setChats: Dispatch<SetStateAction<Chat[]>>; 
    chartHtml: string;
    setChartHtml: React.Dispatch<React.SetStateAction<string>>; 
    response: any; 
    setResponse: Dispatch<SetStateAction<any>>; 
    globalData: any[]; 
    setGlobalData: Dispatch<SetStateAction<any[]>>
};


const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalState  = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export default GlobalContext;
