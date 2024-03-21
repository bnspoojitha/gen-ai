import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ChartComponent from './chartcomponent';
import { useGlobalState } from './GlobalStateContext';
import './chartResponse.css';
import { Resizable } from 'react-resizable';
import DownloadIcon from '@mui/icons-material/Download';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './chartcomponent.css';
// import {IconButton} from '@mui/material';
// import FullscreenIcon from '@mui/icons-material/Fullscreen';
// import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
// import { useFullscreen } from '@straw-hat/react-fullscreen';
import {
  GridRowModesModel,
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport
} from "@mui/x-data-grid";

type Props = {
  chartHtml?: string;
  response: string;
  id?: string;
};

const ChartResponse = ({ chartHtml, response }: Props) => {
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const target = React.useRef<HTMLElement | null>(null);
  const { chats } = useGlobalState();
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



  // const { isFullscreen, toggleFullscreen } = useFullscreen(target);
  console.log(chats, "chats");
  const EditToolbar: React.FC = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} style={{ marginLeft: '483px' }} />
      </GridToolbarContainer>

    );
  };

  return (
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
  );
};

export default ChartResponse;


