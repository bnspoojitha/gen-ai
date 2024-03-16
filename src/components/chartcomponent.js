
import React from 'react';

const ChartComponent = (props, ref) => {
  const {chartHtml} = props;
  return (
    <div id="viz-container"  style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
      <iframe ref={ref}
        id='chart-iframe'
        title="Chart Visualization"
        srcDoc={chartHtml}
        width="600" // Adjust width as needed
        height="400" // Adjust height as needed
        frameBorder="0"
        style={{ border: '1px solid #ccc', borderRadius: '4px', marginTop: '20px', backgroundColor: '#ffff'}}
      ></iframe>
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