
import React, { useCallback , useEffect, useRef} from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './chartcomponent.css';

const ChartComponent = (props, ref) => {
  const {chartHtml} = props;
  const iframeRef = useRef(null);
  const downloadPDF = () => {
    const chartIframe = document.getElementById('chart-iframe');
    const iframeContent = chartIframe.contentWindow.document.body;
    html2canvas(iframeContent).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'px', [chartIframe.clientWidth, chartIframe.clientHeight]);
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('chart.pdf');
    });
  };




 
  return (
    <div id="viz-container"  style={{ width: '100%', margin: 'auto', textAlign: 'center', paddingBottom:'25px' }}>
      <div className='chartElement' style={{backgroundColor:'#ECF0F1', border:'1px solid #ccc', width:'600px'}}>
        <a onClick={downloadPDF} style={{marginLeft:'536px', cursor:'pointer'}}>
          <DownloadIcon />
        </a>
      <iframe ref={ref}
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
  );
};

export default React.forwardRef (ChartComponent);

// import React from 'react';
// import { useEffect } from 'react';

// const ChartComponent = (props, ref) => {
//   const {chartHtml, fullscreen = false} = props;
//   const iframeWidth = fullscreen ? '300px' : '600px';
//   const iframeHeight = fullscreen ? '200px' : '400px';

//   useEffect(() => {
//     // Update canvas dimensions when fullscreen mode changes
//     if (fullscreen) {
//       const canvas = ref.current.contentDocument.querySelector('canvas');
//       if (canvas) {
//         canvas.width = 300; // Adjust width as needed
//         canvas.height = 200; // Adjust height as needed
//       }
//     } 

//   }, [fullscreen]);

//   return (
//     <div id="viz-container"  style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
//       <iframe ref={ref}
//         title="Chart Visualization"
//         srcDoc={chartHtml}
//         width={iframeWidth}
//         height={iframeHeight}
//         style={{ border: '1px solid #ccc', borderRadius: '4px', marginTop: '20px', backgroundColor: '#ffff' }}
//       ></iframe>
//     </div>
//   );
// };

// export default React.forwardRef (ChartComponent);