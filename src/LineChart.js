import { Line } from 'react-chartjs-2';
import { custom } from './lineChartArray';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
import { useState } from 'react';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function LineChart() {

 const month = [];
 const value = [];
 custom.map((x,i)=>{
  if(i%2===0){
    month.push(x.month);
  }
  else{
    month.push('')
  }
  value.push(x.value);
})

// const chart = new Chart(ctx, {
//   type: 'line',
//   data: data,
//   options: {
//     responsive: false,
//     maintainAspectRatio: false,
//     width: 500,
//     height: 300
//   }
// });

    
  const [data, setData]= useState({
    labels: month,
    datasets:[
      {
        data:value,
        tension:0.4,
        backgroundColor: "blue",
      borderColor: "blue",
      borderWidth: 3,
      displayColors: false,
      bodyFontColor: "black",
      pointStyle: 'circle',
      }
    ]
  })    

  const options = {
    plugins:{
        legend:false,
        tooltip: {
            padding:'10px',
            bodyColor:'black',
            usePointStyle: true,
            backgroundColor:'white',
            
          }
    },
    scales:{
      
        x:{
            grid:{
                display:false
            },
        },
        y:{
            min: 0,
            max:40000,
            ticks:{
                stepSize:10000,
                callback:(value) =>  '$' + value 
            },
            grid:{
                borderDash:[5]
            }
        }
    }
  }

  return (
    <div className="line-chart-data">
      <Line data={data}  options={options} height={90}></Line>
    </div>
  );
}

export default LineChart