import React, { useState, ReactNode } from 'react';
import GlobalContext from './GlobalStateContext';


interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [searchText, setSearchText] = useState<string>('');
    const [chats, setChats] = useState<{ text: string| any ; type: string; data?: any[] }[]>([]);
    const [chartHtml, setChartHtml] = useState<string>(''); // Initialize chartHtml state
    const [response, setResponse] = useState<any>(null); 
    const [globalData, setGlobalData] = useState<any[]>([]); 
  return (
    <GlobalContext.Provider value={{  searchText, setSearchText, chats, setChats, chartHtml, setChartHtml,  response, setResponse, globalData, setGlobalData}}>
      {children}
    </GlobalContext.Provider>
  );
};