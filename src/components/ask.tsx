import React from "react";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
type Props = {
  question: string;
};

export default function Ask({ question }: Props) {
  return (
    <Box className="askBox"  sx={{ border: '1px solid #ccc', borderRadius: '5px', minHeight: '30px', p: 2, mt: 2 , width:'fit-content', wordBreak:'break-word',bgcolor:'#ECF0F1'}}>
    <div className="content flex p-3" style={{ display:'flex', alignItems: 'center'}}>
      <div className="flex-shrink-0">
         <Avatar
        sx={{ bgcolor: '#EA4403'}}
        src="/broken-image.jpg"
      />
      </div>
      <div className="flex-grow px-4 flex flex-col" style={{paddingLeft:'10px'}}>
        <span className=" text-base text-[#343333] font-semibold" style={{width:"fit-content",wordBreak:"break-word" }} >
          {question}
        </span>
      </div>
    </div>
    </Box>
  );
}
