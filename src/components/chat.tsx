import React from "react";
import Box from '@mui/material/Box';
import Ask from './ask';
import Response from './response';
import Search from './search';
import { useGlobalState } from './GlobalStateContext';


export default function Chat(){
    console.log("Chat");
    const { chats  } = useGlobalState();
    
    return (
        <Box sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', paddingTop: '10px' }}>
           {chats.map((chat, index) => (
                chat.type === 'question' ? (
                <Ask key={index} question={chat.text} />
                ) : (
                <Response key={index} response={chat.text} />
                )
            ))}
            <Box sx={{ mt: 'auto', pt: 4 }}>
                <Search />
            </Box>
        </Box>
    );
}