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
    totalValue: 1250, // Example data
    totalChange: 12.5, // Example data, percentage change
    assets: [
      { name: "IBM", value: 500, change: 10 },
      { name: "Coca-Cola", value: 300, change: 5 },
      { name: "Bonds", value: 200, change: 8 },
      { name: "Real Estate", value: 250, change: 12 },
    ],
  };

  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Portfolio Value ($)",
        data: [1000, 1049, 933, 877, 1023, 1250], // Example data
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
      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Total Value:</th>
            <th>Total Returns:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${portfolioData.totalValue}</td>
            <td>{portfolioData.totalChange}%</td>
          </tr>
        </tbody>
      </table>

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
