import { Doughnut } from "react-chartjs-2";
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

export function DoughnutChart(){
  const data = {
    labels: [
      'Direct:55',
      'Refferal:30',
      'Social:15',
    ],
    datasets: [{
      type: 'doughnut',
      data: [55,30,15],
      backgroundColor: [
        '#4e73df',
        '#1cc88a',
        '#36b9cc'
      ],
      hoverOffset: 4,
      innerHeight:'10%',
      innerWidth:'10%'
    }]
  };

  const options = {        
    cutout: '100',
    plugins: {
      legend: {
         position: 'right'
      }
   }
};

  return(
    <div className="doughnut-chart-data">
      <Doughnut data={data} style={{width:'300px', height:'300px'}}  options={{ maintainAspectRatio: false ,options}} ></Doughnut>
    </div>
  );

}