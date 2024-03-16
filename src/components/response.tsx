import React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useGlobalState } from './GlobalStateContext';
// import Typewriter from "typewriter-effect";

type Props = {
  response: string;
};

const Response = ({ response }: Props) => {
  const isChartResponse = response.includes('<canvas');
  const { chartHtml } = useGlobalState();
    return (
      <Box className="responseBox" sx={{ border: '1px solid #ccc', borderRadius: '5px', minHeight: '30px', p: 2, mt: 2, width: 'fit-content', wordBreak: 'break-word', bgcolor: '#ECF0F1' }}>
        <div className="content flex p-3" >
          <div className="botdetails" style={{paddingBottom:'10px', display:'flex',}}>
            <Avatar sx={{ bgcolor: '#EA4403', width: 25, height: 25,  }} src="/broken-image.jpg" />
            <span className="userName" style={{paddingLeft:'5px', color:'#EA4403'}}>Bot</span>
          </div>
          <div className="flex-grow px-4 flex flex-col text-base text-[#343333]" style={{ paddingLeft: '10px' }}>
            <span>{response}</span>
            {/* <Typewriter
              options={{
                strings: response,
                autoStart: true,
                loop: false,
                delay: 55,
              }}
            /> */}
          </div>
        </div>
    </Box>
    );
  };
  
  export default Response;