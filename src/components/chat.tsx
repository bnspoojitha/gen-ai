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
import ExploreIcon from '@mui/icons-material/Explore';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
export default function Chat() {
    const { chats } = useGlobalState();
    const { chartHtml } = useGlobalState();
    const chatRef = useRef(null);
    const hasQuestions = chats.some(chat => chat.type === 'question');
    return (
        <Box  sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
              {!hasQuestions && (
               <Box className="welcomeNote">
                <div className="sampleCardNote">
                    <Typography gutterBottom variant="h3" component="div"> Hello There</Typography>
                    <Typography variant="subtitle1" gutterBottom>I'm BOT, here to answer your questions on mortgage stress across Australia. I
                    can also predict house prices in our capital cities.</Typography>
                </div>
                <div className="cardElement">
                    <div> 
                   <Typography variant="h6">  <ExploreIcon sx={{ fontSize: 22,color: '#EA4403',paddingLeft:'5px'  }} />Explore Data </Typography>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Australia
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           How many loans are at stree in each stage?
                        </Typography>
                        </CardContent>
                    </Card>
                    </div>
                    <div>
                      <Typography variant="h6"> <TroubleshootIcon sx={{ fontSize: 22,color: '#EA4403', paddingLeft:'5px' }} /> Examine Metrics</Typography>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Australia
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           How many loans are at stree in each stage?
                        </Typography>
                        </CardContent>
                    </Card>
                    </div>
                    <div>
                      <Typography variant="h6"> <TrendingUpIcon sx={{ fontSize: 22 , color: '#EA4403', paddingLeft:'5px' }}  />Predict growth</Typography> 
                    <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Australia
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           How many loans are at stree in each stage?
                        </Typography>
                        </CardContent>
                    </Card>
                    </div>
                    </div>
                </Box>
              )}
            <div id="chat-container">
            {chats.map((chat, index) => (
                <React.Fragment key={index}>
                    {chat.type === 'question' ? (
                        <Ask question={chat.text} />
                    ) : (
                        chat.type === 'chart'  ? (
                            <ChartResponse key={index} chartHtml={chartHtml} response={chat.text}  id="chart-iframe"  />
                        ) : (
                            
                            chat.text != '' && <Response key={index} response={chat.text} />
                        )
                    )}
                </React.Fragment>
            ))}
            </div>
            <Box sx={{ mt: 'auto', pt: 4 }}>
                <Search  />
            </Box>
        </Box>
    );
}