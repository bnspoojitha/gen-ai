import React,{useRef} from "react";
import Box from '@mui/material/Box';
import Ask from './ask';
import Response from './response';
import Search from './search';
import { useGlobalState } from './GlobalStateContext';
import ChartResponse from './chartResponse';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./chat.css";
import StartIcon from '@mui/icons-material/Start';
import { chatTypes } from './GlobalStateTypes'; 
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


export default function Chat() {
    const { chats } = useGlobalState();
    const { chartHtml } = useGlobalState();
    const chatRef = useRef(null);
    // const hasQuestions = chats.some(chat => chat.type === 'question');
    const hasQuestions = chats.some(chat => chat.type === chatTypes.Question); 
   
    console.log("chats",chats);
    const pdfRef = useRef<HTMLDivElement>(null);
    //   const questions = chats.filter(chat => chat.type === chatTypes.Question);
    // const answers = chats.filter(chat => chat.type === chatTypes.Answer);

    const downloadChatbtn =  () => {

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



        // const chatContainer = document.getElementById('chat-container');
        // if (chatContainer) {
        //     setTimeout(() => {
        //         html2canvas(chatContainer).then(canvas => {
        //             const imgData = canvas.toDataURL('image/png');
        //             const pdf = new jsPDF();
        //             const imgWidth = 210; // A4 width in mm
        //             const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
        //             pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        //             pdf.save('chat.pdf');
        //         });
        //     }, 1000); 
        // }

        const input =pdfRef.current;
          const chartIframe = document.getElementById('chat-container');
        // const iframeContent = chartIframe?.contentWindow?.document.body;
        if (chartIframe) {
            html2canvas(chartIframe).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                console.log("chartIframe",chartIframe);
                const pdf = new jsPDF('p', 'mm', 'a4', true);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                const imgX = (pdfWidth - imgWidth * ratio) / 2;
                const imgY = 30;
                pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
                pdf.save('chat.pdf');
            });
        } else {
            console.error('PDF reference is null.');
        }
    };


    return (
        <div className="chatPage">
        <Box className="chatContent">
              {!hasQuestions && (
               <Box className="welcomeNote">
                <div className="sampleCardNote">
                    <Typography gutterBottom variant="h4" component="div"> Hello There</Typography>
                    <Typography variant="subtitle1" gutterBottom>I'm BOT, here to answer your questions on mortgage stress across Australia. I
                    can also predict house prices in our capital cities.</Typography>
                </div>
                <div className="cardElement">
                        <div className ="searchElementDetails">
                            <div className="cardContent" style={{display: 'flex', flexDirection: 'row', gap:'10px', margin:'10px'}} >
                                <Typography className ="searchElementHeading" variant="h6"> <StartIcon  className="iconColor"/> Start Searching</Typography> 
                                <div className="cardContainer" >
                                <Card className="cardstyle" sx={{ maxWidth: 340, border: '1px solid #EA4403',borderRadius:'20px',backgroundColor:'#EE6302' }}>
                                    <CardContent>
                                    <Typography variant="body2" sx={{  color:'#ffff'}}> How many loans are at stree in each stage?</Typography>
                                    </CardContent>
                                </Card>
                                </div>
                                <div className="cardContainer" >
                                <Card className="cardstyle" sx={{ maxWidth: 340, border: '1px solid #EA4403',borderRadius:'20px', padding: 0, backgroundColor:'#EE6302'}}>
                                    <CardContent>
                                    <Typography variant="body2"  sx={{  color:'#ffff'}}> How many loans are at stree in each stage?</Typography>
                                    </CardContent>
                                </Card>
                                </div>
                            </div>
                            <div className="cardContent" style={{display: 'flex', flexDirection: 'row', gap:'10px'}}>
                            <div className="cardContainer" style={{padding:'10px'}}>
                                <Card className="cardstyle" sx={{ maxWidth: 340, border: '1px solid #EA4403',borderRadius:'20px', padding: 0,backgroundColor:'#EE6302' }}>
                                    <CardContent>
                                    <Typography variant="body2"  sx={{  color:'#ffff'}}> How many loans are at stree in each stage?</Typography>
                                    </CardContent>
                                </Card>
                                </div>
                                <div className="cardContainer" style={{padding:'10px'}}>
                                <Card className="cardstyle" sx={{ maxWidth: 340, border: '1px solid #EA4403',borderRadius:'20px', padding: 0,backgroundColor:'#EE6302' }}>
                                    <CardContent>
                                    <Typography variant="body2"  sx={{  color:'#ffff'}}> How many loans are at stree in each stage?</Typography>
                                    </CardContent>
                                </Card>
                                </div>
                            </div>
                        </div>
                </div>
                </Box>
              )}
              <div id="chat-container" ref={pdfRef}>
                    {chats.map((chat, index) => (
                        <React.Fragment key={index}>
                            {chat.type === chatTypes.Question && (
                                <Ask question={chat.text} />
                            )}
                            {chat.type === chatTypes.Answer && (
                                <Response response={chat.text} />
                            )}
                            {chat.type === chatTypes.Chart && (
                                <ChartResponse chartHtml={chat.text} response={chat.text} id="chart-iframe" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
        </Box>
        <Box>
        </Box>
        <Box  sx={{ mt: 'auto', pt:10}} >
            <div className="fixed-bottom">
                <Search />
                    <div className='footer'>
                        <span>Remember, my AI isn't perfect - double-check my responses before making any big decisions. </span>
                    </div>
                    </div>
            </Box>
      
        </div>
    );
}