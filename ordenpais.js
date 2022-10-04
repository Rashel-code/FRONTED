const config = {
    type: 'scatter',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Scatter Chart'
        }
      }
    },
  };