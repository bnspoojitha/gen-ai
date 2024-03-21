import React,{useRef, useEffect, useState} from "react";
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
import ExploreIcon from '@mui/icons-material/Explore';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import StartIcon from '@mui/icons-material/Start';
import { chatTypes } from './GlobalStateTypes'; 
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Avatar from '@mui/material/Avatar';
import {
    GridRowModesModel,
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport
  } from "@mui/x-data-grid";

export default function Main() {
    const { chats } = useGlobalState();
    const { chartHtml } = useGlobalState();
    const chatRef = useRef(null);
    // const hasQuestions = chats.some(chat => chat.type === 'question');
    const hasQuestions = chats.some(chat => chat.type === chatTypes.Question); 
   
    console.log("chats",chats);
    const pdfRef = useRef<HTMLDivElement>(null);
    
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const target = React.useRef<HTMLElement | null>(null);
  const [message, setMessage] = useState<string>("");
  const [dataRows, setDataRows] = useState<any[]>([]);
  const [dataColumns, setDataColumns] = useState<any[]>([])
    useEffect(() => {
        chats.forEach((chat) => {
          if (chat.type === "Message") {
            setMessage(chat.text);
          } else if (chat.type === "Data") {
            const data = chat.data || [];
            const rowsWithIds = data.map((item, index) => ({
              id: index + 1, 
              ...item
            }));
            const columns = data.length > 0 ? Object.keys(data[0]).map(key => ({
              field: key,
              headerName: key,
              flex: 1,
              headerClassName: 'custom-header',
            })) : [];
            setDataRows(rowsWithIds);
            setDataColumns(columns);
          }
        });
      }, [chats]);
    //   const questions = chats.filter(chat => chat.type === chatTypes.Question);
    // const answers = chats.filter(chat => chat.type === chatTypes.Answer);

    const downloadChatbtn = () => {
        const chartChat = chats.find(chat => chat.type === chatTypes.Chart);
        if (chartChat) {
            const chartIframe = document.getElementById('chart-iframe') as HTMLIFrameElement;
    
            // Ensure the iframe is loaded
            chartIframe.onload = () => {
                // Get the content document of the iframe
                const iframeDocument = chartIframe.contentDocument;
    
                // Check if iframe content is accessible (same origin)
                if (iframeDocument) {
                    // Capture the content of the iframe as an image
                    html2canvas(iframeDocument.body).then(canvas => {
                        // Convert the captured image to data URL
                        const imgData = canvas.toDataURL('image/png');
    
                        // Create a new PDF instance
                        const pdf = new jsPDF('p', 'mm', 'a4');
    
                        // Calculate the dimensions and position for the image in the PDF
                        const pdfWidth = pdf.internal.pageSize.getWidth();
                        const pdfHeight = pdf.internal.pageSize.getHeight();
                        const imgWidth = canvas.width;
                        const imgHeight = canvas.height;
                        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                        const imgX = (pdfWidth - imgWidth * ratio) / 2;
                        const imgY = (pdfHeight - imgHeight * ratio) / 2;
    
                        // Add the captured image to the PDF
                        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    
                        // Save the PDF with the chat content
                        pdf.save('chat.pdf');
                    });
                } else {
                    console.error('Cannot access iframe content due to cross-origin restrictions.');
                }
            };
        } else {
            console.error('Chart chat not found.');
        }
    }
    
    

    
    
    console.log(chats, "chats");
    const EditToolbar: React.FC = () => {
      return (
        <GridToolbarContainer>
          <GridToolbarExport printOptions={{ disableToolbarButton: true }} style={{ marginLeft: '483px' }} />
        </GridToolbarContainer>
  
      );
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
                            <div className="cardContent">
                                <Typography className ="searchElementHeading" variant="h6"> <StartIcon  className="iconColor"/> Start Searching</Typography> 
                                <div className="cardContainer">
                                <Card className="cardstyle" sx={{ maxWidth: 340, border: '1px solid #EA4403',borderRadius:'20px',backgroundColor:'#EE6302' }}>
                                    <CardContent>
                                    <Typography variant="body2" sx={{  color:'#ffff'}}> How many loans are at stree in each stage?</Typography>
                                    </CardContent>
                                </Card>
                                </div>
                                <div>
                                <Card className="cardstyle" sx={{ maxWidth: 340, border: '1px solid #EA4403',borderRadius:'20px', padding: 0, backgroundColor:'#EE6302'}}>
                                    <CardContent>
                                    <Typography variant="body2"  sx={{  color:'#ffff'}}> How many loans are at stree in each stage?</Typography>
                                    </CardContent>
                                </Card>
                                </div>
                            </div>
                            <div className="cardContent">
                            <div className="cardContainer">
                                <Card className="cardstyle" sx={{ maxWidth: 340, border: '1px solid #EA4403',borderRadius:'20px', padding: 0,backgroundColor:'#EE6302' }}>
                                    <CardContent>
                                    <Typography variant="body2"  sx={{  color:'#ffff'}}> How many loans are at stree in each stage?</Typography>
                                    </CardContent>
                                </Card>
                                </div>
                                <div className="cardContainer">
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
                                // <ChartResponse chartHtml={chat.text} response={chat.text} id="chart-iframe" />
                                <Box className="responseBox" sx={{borderRadius: '5px', minHeight: '30px', p: 1, mt: 1, width: 'fit-content', wordBreak: 'break-word', }}>
                                <div className="content flex p-3" >
                                  <div className="botdetails" style={{ paddingBottom: '10px', display: 'flex', }}>
                                    <Avatar sx={{ bgcolor: '#EA4403', width: 25, height: 25, }} src="/broken-image.jpg" />
                                    <div>
                                      <span className="userName" style={{ paddingLeft: '5px' }}>Bot</span>
                                      <div className="flex-grow px-4 flex flex-col text-base text-[#343333]" style={{ paddingLeft: '10px' }}>
                                        <span>{message}</span>
                                        <div style={{ width: '500px' }}>
                                          {/* <ChartComponent chartHtml={chartHtml} ref={target} message={message} style={{ marginLeft: '20%' }} /> */}
                                          <div id="viz-container"  style={{ width: '100%', margin: 'auto', textAlign: 'center', paddingBottom:'25px' }}>
                                            <div className='chartElement' id='chartIFrame' style={{backgroundColor:'#ECF0F1', border:'1px solid #ccc', width:'600px'}}>
                                              <iframe 
                                                id='chart-iframe'
                                                title="Chart Visualization"
                                                srcDoc={chartHtml}
                                                width="600" 
                                                height="400"
                                                frameBorder="0"
                                                style={{  borderRadius: '4px', marginTop: '20px',padding:'10px' }}
                                              >
                                              </iframe>  
                                              </div>
                                          </div>
                                        </div>
                                        <div style={{ height: 500, width: '600px', backgroundColor: '#ECF0F1' }}>
                                        <DataGrid
                                            rows={dataRows}
                                            columns={dataColumns}
                                            editMode="row"
                                            rowModesModel={rowModesModel}
                                            slots={{
                                              toolbar: EditToolbar,
                                            }}
                                            slotProps={{
                                              toolbar: { setRowModesModel },
                                            }}
                                            sx={{ height: '400' }}
                                            getCellClassName={(params) => {
                                              return 'custom-cell';
                                            }}
                                            getRowClassName={() => {
                                              return 'custom-row';
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                          
                                </div>
                              </Box>
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
                        <Button variant="contained" className='downloadChatbtn' onClick={downloadChatbtn}><DownloadIcon /> Download chat </Button>
                    </div>
                    </div>
            </Box>
      
        </div>
    );
}