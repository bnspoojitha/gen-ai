// export const getDummyResponse = async () => {
//     return {
//         "message": "The number of loans at stress in Australia is highest in New South Wales, followed by Queensland and Victoria. The lowest number of loans at stress is in the Northern Territory.",
//     "data": [
//         {
//             "state": "Australian Capital Territory",
//             "num_loans_at_stress": 25316
//         },
//         {
//             "state": "New South Wales",
//             "num_loans_at_stress": 22787
//         },
//         {
//             "state": "Northern Territory",
//             "num_loans_at_stress": 2999
//         },
//         {
//             "state": "Queensland",
//             "num_loans_at_stress": 16085
//         },
//         {
//             "state": "South Australia",
//             "num_loans_at_stress": 16304
//         },
//         {
//             "state": "Tasmania",
//             "num_loans_at_stress": 4747
//         },
//         {
//             "state": "Victoria",
//             "num_loans_at_stress": 17311
//         },
//         {
//             "state": "Western Australia",
//             "num_loans_at_stress": 13349
//         }
//     ],
//     "chart": `<!doctype html>
//     <html lang="en">
//     <head>
//     <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
//     <title>Assistant IAP Chart</title>
//     </head>
//     <body>
//     <div id="viz-container" style="width: 100%; margin: auto; text-align:center;">
//     <canvas id="visualisation" style="display: inline;"></canvas>
//     </div>
//     <script>
//             const data = [
//       {
//         "state": "Australian Capital Territory",
//         "num_loans_at_stress": 25316
//       },
//       {
//         "state": "New South Wales",
//         "num_loans_at_stress": 22787
//       },
//       {
//         "state": "Northern Territory",
//         "num_loans_at_stress": 2999
//       },
//       {
//         "state": "Queensland",
//         "num_loans_at_stress": 16085
//       },
//       {
//         "state": "South Australia",
//         "num_loans_at_stress": 16304
//       },
//       {
//         "state": "Tasmania",
//         "num_loans_at_stress": 4747
//       },
//       {
//         "state": "Victoria",
//         "num_loans_at_stress": 17311
//       },
//       {
//         "state": "Western Australia",
//         "num_loans_at_stress": 13349
//       }
//     ]
//     new Chart(
//       document.getElementById('visualisation'),
//       {
//         type: 'bar',
//         data: {
//           labels: data.map(row => row.state),
//           datasets: [
//             {
//               label: 'Number of Loans at Stress',
//               data: data.map(row => row.num_loans_at_stress),
//               backgroundColor: "#004165",
//               borderColor: "#004165"
//             }
//           ]
//         }, 
//         options: {
//           plugins: {
//             legend: {position: 'top'},
//             title: {text: 'Number of Loans at Stress by State', display: true}
//           }
//         }
//       }
//       );
     
//         </script>
//     </body>
//     </html>`,
//     "has_chart": true,
//     "response_id": "365a4423a8104ab2b5b8a688f00f028e"
//     };
//   };
export const getDummyResponse = async () => {
  return {
    "message": "The number of loans at stress in Australia is highest in New South Wales, followed by Queensland and Victoria. The lowest number of loans at stress is in the Northern Territory.",
    "data": [
      {
        "state": "Australian Capital Territory",
        "num_loans_at_stress": 25316
      },
      {
        "state": "New South Wales",
        "num_loans_at_stress": 22787
      },
      {
        "state": "Northern Territory",
        "num_loans_at_stress": 2999
      },
      {
        "state": "Queensland",
        "num_loans_at_stress": 16085
      },
      {
        "state": "South Australia",
        "num_loans_at_stress": 16304
      },
      {
        "state": "Tasmania",
        "num_loans_at_stress": 4747
      },
      {
        "state": "Victoria",
        "num_loans_at_stress": 17311
      },
      {
        "state": "Western Australia",
        "num_loans_at_stress": 13349
      }
    ],
    "chart": `<!doctype html>
      <html lang="en">
      <head>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <title>Assistant IAP Chart</title>
      </head>
      <body>
      <div id="viz-container" style="width: 100%; margin: auto; text-align:center;">
      <canvas id="visualisation" style="display: inline;"></canvas>
      </div>
      <script>
        const data = [
          {
            "state": "Australian Capital Territory",
            "num_loans_at_stress": 25316
          },
          {
            "state": "New South Wales",
            "num_loans_at_stress": 22787
          },
          {
            "state": "Northern Territory",
            "num_loans_at_stress": 2999
          },
          {
            "state": "Queensland",
            "num_loans_at_stress": 16085
          },
          {
            "state": "South Australia",
            "num_loans_at_stress": 16304
          },
          {
            "state": "Tasmania",
            "num_loans_at_stress": 4747
          },
          {
            "state": "Victoria",
            "num_loans_at_stress": 17311
          },
          {
            "state": "Western Australia",
            "num_loans_at_stress": 13349
          }
        ];
        new Chart(
          document.getElementById('visualisation'),
          {
            type: 'bar',
            data: {
              labels: data.map(row => row.state),
              datasets: [
                {
                  label: 'Number of Loans at Stress',
                  data: data.map(row => row.num_loans_at_stress),
                  backgroundColor: "#004165",
                  borderColor: "#004165"
                }
              ]
            }, 
            options: {
              plugins: {
                legend: {position: 'top'},
                title: {text: 'Number of Loans at Stress by State', display: true}
              }
            }
          }
        );
      </script>
      </body>
      </html>`,
    "has_chart": true,
    "response_id": "365a4423a8104ab2b5b8a688f00f028e"
  };
};

export const getEmptyResponse = async () => {
  return {
    "message": "How can I help?",
    "data": [],
    "chart": "",
    "has_chart": false
  };
};