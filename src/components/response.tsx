import React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
// import Typewriter from "typewriter-effect";

type Props = {
  response: string;
};

const Response = ({ response }: Props) => {

    return (
      <Box className="responseBox" sx={{ borderRadius: '5px', minHeight: '30px', p: 1, mt: 1, width: 'fit-content', wordBreak: 'break-word', }}>
        {/* <div className="content flex p-3" > */}
          <div className="botdetails" style={{paddingBottom:'10px', display:'flex',}}>
            <Avatar sx={{ bgcolor: '#EA4403', width: 25, height: 25,  }} src="/broken-image.jpg" />
            <div>
              <span className="userName" style={{paddingLeft:'5px'}}>Bot</span>
              <div  style={{ paddingLeft: '10px' }}>
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
          </div>
        {/* </div> */}
    </Box>
    );
  };
  
  export default Response;