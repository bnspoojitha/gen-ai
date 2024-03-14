import React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

type Props = {
  response: string;
};

const Response = ({ response }: Props) => {
    return (
      <Box className="responseBox" sx={{ border: '1px solid #ccc', borderRadius: '5px', minHeight: '30px', p: 2, mt: 2 ,width: 'fit-content', wordBreak:'break-word', bgcolor:'#ECF0F1'}}>
        <div className="content flex p-3" style={{  display:'flex', alignItems: 'center' }}>
          <div className="flex-shrink-0 ">
            <Avatar sx={{ bgcolor: '#EA4403'}} src="/broken-image.jpg" />
          </div>
          <div className="flex-grow px-4 flex flex-col text-base text-[#343333]" style={{paddingLeft:'10px'}}>
            <span>{response}</span>
          </div>
        </div>
      </Box>
    );
  };
  
  export default Response;