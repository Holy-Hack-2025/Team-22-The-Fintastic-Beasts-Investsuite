// This is the code for the analytics page in the REACT app

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
import users from "./Users.json";

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

// Main function
function AnalyticsPage() {
  // find the current user in the database, which is me: Maxim
  const portfolioData = users.find((user) => user.name === "Maxim");

  // Make a line chart of the user's portfolio value of last year.
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

  // Make a pie chart out of the user's assets.
  const pieChartData = {
    labels: portfolioData.assets.map((asset) => asset.name),
    datasets: [
      {
        data: portfolioData.assets.map((asset) => asset.value),
        backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4caf50"],
      },
    ],
  };

  // Return the HTML content of the analytics page.
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
            <td>${portfolioData.portfolioValue}</td>
            <td>{portfolioData.portfolioReturns}%</td>
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
