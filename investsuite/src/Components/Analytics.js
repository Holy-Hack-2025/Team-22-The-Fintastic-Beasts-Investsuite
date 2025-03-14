import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function AnalyticsPage() {
  const portfolioData = {
    totalValue: 120000, // Example data
    totalChange: 15, // Example data, percentage change
    assets: [
      { name: "Stock A", value: 50000, change: 10 },
      { name: "Stock B", value: 30000, change: 5 },
      { name: "Bonds", value: 20000, change: 8 },
      { name: "Real Estate", value: 10000, change: 12 },
    ],
  };

  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Portfolio Value ($)",
        data: [100000, 105000, 110000, 115000, 120000, 125000], // Example data
        borderColor: "#4caf50",
        fill: false,
      },
    ],
  };

  const pieChartData = {
    labels: portfolioData.assets.map((asset) => asset.name),
    datasets: [
      {
        data: portfolioData.assets.map((asset) => asset.value),
        backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4caf50"],
      },
    ],
  };

  return (
    <div className="content-area">
      <h2>Investment Portfolio Overview</h2>
      <div className="overview">
        <div className="total-value">
          <h3>Total Portfolio Value</h3>
          <p>${portfolioData.totalValue}</p>
        </div>
        <div className="performance">
          <h3>Overall Performance</h3>
          <p>{portfolioData.totalChange}%</p>
        </div>
      </div>
      <div className="charts">
        <div className="line-chart">
          <h3>Portfolio Value Over Time</h3>
          <Line data={lineChartData} />
        </div>
        <div className="pie-chart">
          <h3>Portfolio Allocation</h3>
          <Pie data={pieChartData} />
        </div>
      </div>
      <div className="assets">
        <h3>Assets Overview</h3>
        <ul>
          {portfolioData.assets.map((asset, index) => (
            <li key={index}>
              <strong>{asset.name}</strong>: ${asset.value} ({asset.change}%)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AnalyticsPage;

// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register necessary Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Analytics = () => {
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//     datasets: [
//       {
//         label: "Investment Growth",
//         data: [65, 59, 80, 81, 56],
//         borderColor: "rgba(75,192,192,1)",
//         backgroundColor: "rgba(75,192,192,0.2)",
//         fill: true,
//       },
//     ],
//   };

//   return (
//     <div className="content-area">
//       <div>
//         <h2>Investment Analytics</h2>
//         <Line data={data} />
//       </div>
//     </div>
//   );
// };

// export default Analytics;
