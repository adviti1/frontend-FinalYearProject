import React from 'react';
import Chart from 'react-apexcharts';

const Dashboard = () => {
  // Pie chart: Mentions by Sentiment
  const sentimentOptions = {
    labels: ['Neutral', 'Positive', 'Negative'],
    colors: ['#CCCCCC', '#4CAF50', '#F44336'],
  };
  const sentimentSeries = [20, 60, 14]; // Replace with dynamic data

  // Donut chart: Audience by Media Type
  const audienceOptions = {
    labels: ['Twitter', 'Facebook'],
    colors: ['#1DA1F2', '#3b5998'],
  };
  const audienceSeries = [60, 40]; // Replace with dynamic data

  // Bar chart: Mentions by Media Type
  const mediaTypeOptions = {
    chart: { type: 'bar' },
    xaxis: { categories: ['Twitter', 'Facebook'] },
    colors: ['#1DA1F2', '#3b5998'],
  };
  const mediaTypeSeries = [
    {
      name: 'Mentions',
      data: [80, 40], // Replace with dynamic data
    },
  ];

  // Line chart: Mentions by Time
  const timeOptions = {
    chart: { type: 'line' },
    xaxis: { categories: ['Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20'] },
  };
  const timeSeries = [
    {
      name: 'Mentions',
      data: [5, 10, 30, 20, 15, 10], // Replace with dynamic data
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
        {/* Mentions by Sentiment */}
        <div style={{ width: '30%' }}>
          <h3>Mentions by Sentiment</h3>
          <Chart options={sentimentOptions} series={sentimentSeries} type="pie" width="100%" />
        </div>

        {/* Audience by Media Type */}
        <div style={{ width: '30%' }}>
          <h3>Audience by Media Type</h3>
          <Chart options={audienceOptions} series={audienceSeries} type="donut" width="100%" />
        </div>

        {/* Mentions by Media Type */}
        <div style={{ width: '30%' }}>
          <h3>Mentions by Media Type</h3>
          <Chart options={mediaTypeOptions} series={mediaTypeSeries} type="bar" width="100%" />
        </div>
      </div>

      {/* Mentions by Time */}
      <div style={{ marginTop: '20px' }}>
        <h3>Mentions by Time</h3>
        <Chart options={timeOptions} series={timeSeries} type="line" width="100%" />
      </div>
    </div>
  );
};

export default Dashboard;