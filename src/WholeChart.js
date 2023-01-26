import LineChart from "./LineChart";
import { ChartPopup } from "./ChartPopup";
import { DoughnutChart } from "./PieChart";

export function ChartData() {
  return (
    <div className="whole-chart-container">
      <div className="line-chart">
        <div className="chart-header1">Earning Overview</div>
        <div className="line-chart-popup">
          <ChartPopup />
        </div>
        <div className="line-chart-innerData">
        <LineChart />
        </div>
      </div>
      <div className="pie-chart">
        <div className="chart-header2">Revenue Sources</div>
        {/* <div className="doughnut-chart-popup"><ChartPopup/></div> */}
        <div className="doughnut-chart">
          {" "}
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}
