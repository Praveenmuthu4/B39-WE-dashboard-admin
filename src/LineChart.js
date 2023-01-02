import { Line } from 'react-chartjs-2';
import { custom } from './lineChartArray';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
import { useState } from 'react';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function LineChart() {

 const length = custom.length;
 const month = [];
 const value = [];
 custom.forEach(x=>{
    month.push(x.month);
    value.push(x.value);
})
    
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
            afterTickToLabelConversion: function(data){


              const xLabels = data.ticks;

              xLabels.forEach(function (month, i) {
                  if (i % 2 === 1){
                      xLabels[i] = '';
                  }
              });}
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
      <Line data={data}  style={{width:'1100px', height:'300px'}}  options={{ maintainAspectRatio: false ,options}}  ></Line>
    </div>
  );
}

export default LineChart