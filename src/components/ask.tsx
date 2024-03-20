import React from "react";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
type Props = {
  question: string;
};

export default function Ask({ question }: Props) {
  return (
    <Box className="askBox"  sx={{  borderRadius: '5px', minHeight: '30px', p: 1, mt: 1 , width:'fit-content', wordBreak:'break-word',}}>
    <div className="content flex p-3" >
      <div className="userdetails" style={{paddingBottom:'10px', display:'flex',}}>
         <Avatar  sx={{ bgcolor: '#EA4403', width: 25, height: 25, }} src="/broken-image.jpg"  />
         <div className="askBoxElement">
          <span className="userName" style={{paddingLeft:'5px'}}>You</span>
          <div className="flex-grow px-4 flex flex-col" style={{paddingLeft:'10px'}}>
            <span className=" text-base text-[#343333] font-semibold" style={{width:"fit-content",wordBreak:"break-word" }} >
              {question}
            </span>
          </div>
        </div>
      </div>
      {/* <div className="flex-grow px-4 flex flex-col" style={{paddingLeft:'10px'}}>
        <span className=" text-base text-[#343333] font-semibold" style={{width:"fit-content",wordBreak:"break-word" }} >
          {question}
        </span>
      </div> */}
    </div>
    </Box>
  );
}
