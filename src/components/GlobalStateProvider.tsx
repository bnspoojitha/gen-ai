import React, { useState, ReactNode } from 'react';
import GlobalContext from './GlobalStateContext';
import { Chat } from './GlobalStateTypes';

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [searchText, setSearchText] = useState<string>('');
    // const [chats, setChats] = useState<{ text: string| any ; type: string; data?: any[] }[]>([]);
    const [chats, setChats] = useState<Chat[]>([]); // Adjust the type to use Chat type
    const [chartHtml, setChartHtml] = useState<string>(''); 
    const [response, setResponse] = useState<any>(null); 
    const [globalData, setGlobalData] = useState<any[]>([]); 
  return (
    <GlobalContext.Provider value={{  searchText, setSearchText, chats, setChats, chartHtml, setChartHtml,  response, setResponse, globalData, setGlobalData}}>
      {children}
    </GlobalContext.Provider>
  );
};