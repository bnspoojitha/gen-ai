import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RocketIcon from '@mui/icons-material/Rocket';
import { useGlobalState } from './GlobalStateContext'; // Import useGlobalContext

type Props = {};

export default function Search({}: Props) {
  const [searchText, setSearchText] = useState('');
  const { setSearchText: setGlobalSearchText, setChats: setGlobalChats } = useGlobalState();


  function generateDummyResponse(question: string): string {
    const responses = [
        "I'm sorry, I don't understand your question.",
        "That's an interesting question. Let me find out.",
        "I'm not sure about that. Let me check.",
        "Great question! Here's what I found:",
        "Hmm, let me think about that for a moment.",
        "I'm not sure I can answer that right now.",
        "Interesting question! Let's explore it together.",
    ];

    // Choose a random response from the array
    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];

    // Concatenate the response with the question for demonstration purposes
    return `${randomResponse}`;
}
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGlobalSearchText(searchText);
    console.log("searchText", searchText);
    setSearchText(''); 
    const dummyResponse = generateDummyResponse(searchText);
    setGlobalChats((prevChats: { text: string; type: string }[]) => [
        ...prevChats,
        { text: searchText, type: 'question' },
        { text: dummyResponse, type: 'response' }
      ]);
      console.log("setGlobalChats", setGlobalChats);
        // For demonstration purposes, you can log the dummy response
        console.log("Dummy Response:", dummyResponse);
  
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };


  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className='searchBox'
      sx={{
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
      }}
    >
      <TextField fullWidth id="fullWidth" value={searchText} onChange={handleOnChange} />
      <button type="submit">
        <RocketIcon sx={{ fontSize: 50, color: '#EA4403', cursor: 'pointer' }} /> {/* Use button element instead */}
      </button>
    </Box>
  );
}