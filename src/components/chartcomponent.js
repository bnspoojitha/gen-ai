
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
    // const iframeContent = chartIframe.contentWindow.document.body;
    console.log(chartIframe,"chartIframe")
    html2canvas(chartIframe).then(canvas => {
      console.log(canvas,"canvas")
      const imgData = canvas.toDataURL('image/png');
      console.log('imgData', imgData);
      const pdf = new jsPDF('p', 'px', [chartIframe.clientWidth, chartIframe.clientHeight]);
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('chart.pdf');
    });
  };

 
  return (
    <div id="viz-container"  style={{ width: '100%', margin: 'auto', textAlign: 'center', paddingBottom:'25px' }}>
      <div className='chartElement' id='chartIFrame' style={{backgroundColor:'#ECF0F1', border:'1px solid #ccc', width:'600px'}}>
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

