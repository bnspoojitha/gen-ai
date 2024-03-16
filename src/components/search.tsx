import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RocketIcon from '@mui/icons-material/Rocket';
import { useGlobalState } from './GlobalStateContext'; 
import { getDummyResponse, getEmptyResponse } from './mockapi';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import './search.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import htmlToImage from 'html-to-image';
// import html2pdf from 'html2pdf.js';
type Props = {
    getChatConversation: () => string; // Function to get the chat conversation
};
interface ApiResponse {
    message: string;
    data: any[]; // Define the type according to your data structure
    chart: string;
    has_chart: boolean;
    response_id?: string; 
    // Add other properties if necessary
  }




export default function Search() {
    const [searchText, setSearchText] = useState('');
    const { setSearchText: setGlobalSearchText, setChats: setGlobalChats, setGlobalData } = useGlobalState();
    const { setChartHtml } = useGlobalState(); // Assuming you have setChartHtml in your global state
    const { chartHtml } = useGlobalState();
    //   function generateDummyResponse(question: string): string {
    //     const responses = [
    //         "I'm sorry, I don't understand your question.",
    //         "That's an interesting question. Let me find out.",
    //         "I'm not sure about that. Let me check.",
    //         "Great question! Here's what I found:",
    //         "Hmm, let me think about that for a moment.",
    //         "I'm not sure I can answer that right now.",
    //         "Interesting question! Let's explore it together.",
    //     ];

    //     // Choose a random response from the array
    //     const randomIndex = Math.floor(Math.random() * responses.length);
    //     const randomResponse = responses[randomIndex];

    //     // Concatenate the response with the question for demonstration purposes
    //     return `${randomResponse}`;
    // }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setGlobalSearchText(searchText);
        console.log("searchText", searchText);
        setSearchText('');
        setGlobalChats(prevChats => [
            ...prevChats,
            { text: searchText, type: 'question' }
        ]);
        try {
            let response: ApiResponse;
            if (searchText.trim().toLowerCase() === 'hi' || searchText.trim().toLowerCase() === 'hello') {
              response = await getEmptyResponse();
            } else {
              response = await getDummyResponse();
            }
            if (response.has_chart === true ) {
              setChartHtml(response.chart);
              setTimeout(() => {
                setChartHtml(response.chart);
                setGlobalChats(prevChats => [
                    ...prevChats,
                    { text: response.chart, type: 'chart' },
                    { text: response.message, type: 'answer' },
                    { text: '', type: 'data', data: response.data }
                ] as { text: string; type: string; data?: any[] }[]);
            }, 1000);
            } else if(response.has_chart === false) {
                setTimeout(() => {
                    setGlobalChats(prevChats => [
                        ...prevChats,
                        { text: response.message, type: 'answer' }
                    ]);
                }, 1000);
            }
          } catch (error) {
            console.error('Error fetching response:', error);
          }
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const downloadChatbtn = async () => {

        // const chatContainer = document.getElementById('chat-container');
        // const chartContainer = document.getElementById('chart-iframe') as HTMLIFrameElement;
    
        // if (chatContainer && chartContainer) {
        //     try {
        //         // Capture content inside chat container
        //         const chatCanvas = await html2canvas(chatContainer);
        //         // Capture content inside chart container
        //         const chartDocument = chartContainer.contentDocument;
        //         if (chartDocument) {
        //             const chartCanvas = await html2canvas(chartDocument.body);
        //             // Combine chat canvas and chart canvas into a single canvas
        //             const combinedCanvas = document.createElement('canvas');
        //             const combinedContext = combinedCanvas.getContext('2d');
        //             if (combinedContext) {
        //                 combinedCanvas.width = Math.max(chatCanvas.width, chartCanvas.width);
        //                 combinedCanvas.height = chatCanvas.height + chartCanvas.height;
    
        //                 combinedContext.drawImage(chatCanvas, 0, 0);
        //                 combinedContext.drawImage(chartCanvas, 0, chatCanvas.height);
        //                 // Convert combined canvas to PDF
        //                 const imgData = combinedCanvas.toDataURL('image/png');
        //                 const pdf = new jsPDF();
        //                 const imgWidth = 210; // A4 width in mm
        //                 const imgHeight = (combinedCanvas.height * imgWidth) / combinedCanvas.width;
    
        //                 pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        //                 pdf.save('chat.pdf');
        //             } else {
        //                 console.error('Failed to get 2D context for combined canvas.');
        //             }
        //         } else {
        //             console.error('Failed to access chart container document.');
        //         }
        //     } catch (error) {
        //         console.error('Error capturing content:', error);
        //     }
        // } else {
        //     console.error('Chat container or chart container not found.');
        // }
        const chatContainer = document.getElementById('chat-container');
        if (chatContainer) {
            // Add a delay before capturing the content
            setTimeout(() => {
                html2canvas(chatContainer).then(canvas => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    const imgWidth = 210; // A4 width in mm
                    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
                    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                    pdf.save('chat.pdf');
                });
            }, 1000); // Adjust the delay time as needed
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            className='searchBox'
            sx={{
                width: '100%',
                maxWidth: '100%',
            }}
        >
                <div className='searchBar'>
                    <TextField fullWidth id="fullWidth" value={searchText} onChange={handleOnChange} />
                    <button type="submit">
                        <RocketIcon sx={{ fontSize: 50, color: '#EA4403', cursor: 'pointer' }} /> {/* Use button element instead */}
                    </button>
                </div>
                <div>
                    <div className='footer'>
                        <span>Remember, my AI isn't perfect - double-check my responses before making any big decisions. </span>
                        <Button variant="contained" className='downloadChatbtn' onClick={downloadChatbtn}><DownloadIcon /> Download chat </Button>
                    </div>
                    
                </div>
        </Box>
    );
}