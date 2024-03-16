import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ChartComponent from './chartcomponent';
import { useGlobalState } from './GlobalStateContext'; 
// import {IconButton} from '@mui/material';
// import FullscreenIcon from '@mui/icons-material/Fullscreen';
// import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
// import { useFullscreen } from '@straw-hat/react-fullscreen';
import {
  GridRowsProp,
  GridRowModesModel,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridToolbarFilterButton,
  GridRowParams,
  GridToolbarExport
} from "@mui/x-data-grid";

type Props = {
    chartHtml?: string;
    response: string;
    id?: string; 
};

const ChartResponse = ({ chartHtml, response}: Props) => {
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const target = React.useRef<HTMLElement | null>(null);
  const { chats } = useGlobalState();
  // const [rowsData, setRowsData] = useState([]);
  // const [columnsData, setColumnsData] = useState([]);

  const data = chats.find(chat => chat.type === 'data')?.data || [];
  const columns = data.length > 0 ? Object.keys(data[0]).map(key => ({
    field: key,
    headerName: key,
    flex: 1
  })) : [];

  const rows = data.map((item, index) => ({
    id: index,
    ...item
  }));


  // const { isFullscreen, toggleFullscreen } = useFullscreen(target);
console.log(chats,"chats");
  const EditToolbar: React.FC = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} style={{marginLeft: '483px'}}/>
      </GridToolbarContainer>

    );
  };
    return (
      <Box className="responseBox" sx={{ border: '1px solid #ccc', borderRadius: '5px', minHeight: '30px', p: 2, mt: 2, width: 'fit-content', wordBreak: 'break-word', bgcolor: '#ECF0F1' }}>
      {/* <IconButton color="inherit" style={{marginLeft: '614px'}} onClick={toggleFullscreen}>{isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}</IconButton> */}
      <div className="content flex p-3" >
          <div className="botdetails" style={{paddingBottom:'10px', display:'flex',}}>
            <Avatar sx={{ bgcolor: '#EA4403', width: 25, height: 25,  }} src="/broken-image.jpg" />
            <span className="userName" style={{paddingLeft:'5px', color:'#EA4403'}}>Bot</span>
          </div>
        <div className="flex-grow px-4 flex flex-col text-base text-[#343333]" style={{ paddingLeft: '10px' }}>
           {/* <ChartComponent chartHtml={chartHtml} ref={target}  fullscreen={isFullscreen}  /> */}
            {/* <span>{response}</span>  */}
           <ChartComponent chartHtml={chartHtml} ref={target}    />
           <div style={{ height: 300, width: '100%' }}>
          <DataGrid    
              rows={rows}
              columns={columns}
              editMode="row"
              rowModesModel={rowModesModel}
              slots={{
                toolbar: EditToolbar,
              }}
              slotProps={{
                toolbar: {  setRowModesModel },
              }}
              sx={{bgcolor: '#ffff', height:'300'}}
            />
          </div>
        </div>
      </div>
    </Box>
    );
  };
  
  export default ChartResponse;


