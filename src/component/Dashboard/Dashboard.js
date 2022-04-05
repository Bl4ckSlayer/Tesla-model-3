import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="m-4">
      <h1 className="text-4xl text-center m-8 font-bold text-red-600">
        Tesla Model 3 Share Analysis
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-12">
        <div className="">
          <h1 className="text-center text-2xl font-semibold text-cyan-700 mb-4">
            Month Wise Sell and Investment
          </h1>
          <ResponsiveContainer width="99%" height={300}>
            <LineChart width={900} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"month"} padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="investment"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h1 className="text-center text-2xl font-semibold text-cyan-700 mb-4">
            Investment VS Sell
          </h1>
          <ResponsiveContainer width="99%" height={300}>
            <BarChart width={900} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"month"} />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="investment" fill="#8884d8" />
              <Bar yAxisId="right" dataKey="sell" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h1 className="text-center text-2xl font-semibold text-cyan-700 mb-4">
            Investment Sell Revenue
          </h1>
          <ResponsiveContainer width="99%" height={300}>
            <ComposedChart width={500} height={400} data={data}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey={"month"} scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
              <Scatter dataKey="sell" fill="red" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h1 className="text-center text-2xl font-semibold text-cyan-700 mb-4">
            Investment Sell Revenue
          </h1>
          <ResponsiveContainer width="99%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <Tooltip />
              <Legend />
              <PolarGrid />
              <PolarAngleAxis dataKey={"month"} />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar
                name="investment"
                dataKey="investment"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="sell"
                dataKey="sell"
                stroke="#ff7300"
                fill="#ff7300"
                fillOpacity={0.6}
              />
              <Radar
                name="revenue"
                dataKey="revenue"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
